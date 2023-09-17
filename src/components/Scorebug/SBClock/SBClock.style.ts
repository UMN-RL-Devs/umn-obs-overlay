import { styled } from "styled-components";
import Sizing from "../../../constants/sizing.json";

export const SBClockTrapezoid = styled.div`
  border-top: ${Sizing.Scorebug.clock.bottomWidth}px solid
    ${Sizing.Scorebug.clock.backgroundColor};
  border-left: ${Sizing.Scorebug.height}px solid transparent;
  border-right: ${Sizing.Scorebug.height}px solid transparent;
  height: 0;
  width: ${Sizing.Scorebug.clock.topWidth}px;
  position: absolute;
  left: 36.9%;
  top: ${Sizing.PlayerBoostBar.topOffset}px;
  z-index: 3;
`;

export const SBClockText = styled.p<{
  $isOT: boolean;
}>`
  font-size: ${(props) =>
    props.$isOT
      ? Sizing.Scorebug.clock.fontSize - 6
      : Sizing.Scorebug.clock.fontSize}px;
  position: absolute;
  left: 47.25%;
  top: -28px;
  color: white;
  font-family: bahnschrift;
  z-index: 4;
`;
