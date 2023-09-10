import { styled } from "styled-components";
import Sizing from "../../../constants/sizing.json";

const LEFT_START = 865;
const RIGHT_START = 1030;

export const SBSeriesShape = styled.div<{
  $isLeft: boolean;
  $index: number;
  $isWon: boolean;
  $color: string;
}>`
  position: absolute;
  top: 50px;
  left: ${(props) =>
    props.$isLeft
      ? LEFT_START - props.$index * Sizing.Scorebug.seriesIndicator.offset
      : RIGHT_START + props.$index * Sizing.Scorebug.seriesIndicator.offset}px;
  height: ${Sizing.Scorebug.seriesIndicator.height}px;
  width: ${Sizing.Scorebug.seriesIndicator.width}px;
  background: ${(props) => (props.$isWon ? props.$color : "white")};
  transform: ${(props) => (props.$isLeft ? "skew(40deg)" : "skew(-40deg)")};
  z-index: 7;
`;
