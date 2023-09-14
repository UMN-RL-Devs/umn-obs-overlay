import { styled } from "styled-components";
import Sizing from "../../../constants/sizing.json";

export const PGPlayerRowWrapper = styled.div<{ $isLeft: boolean }>`
  position: absolute;
  top: ${Sizing.Postgame.playerNames.topOffset}px;
  height: 60px;
  width: 180px;
  ${(props) =>
    props.$isLeft
      ? `left: ${Sizing.Postgame.playerNames.sideOffset}px;`
      : `left: ${Sizing.Postgame.playerNames.sideOffset + 960}px;`}
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const PGPlayerRowText = styled.p`
  font-size: ${Sizing.Postgame.playerNames.fontSize}px;
  font-weight: bold;
`;
