import { styled } from "styled-components";
import Sizing from "../../constants/sizing.json";

export const TeamPlayerGroupWrapper = styled.div<{ $isLeft: boolean }>`
  font-family: bahnschrift;
  position: absolute;
  top: ${Sizing.PlayerBoostBar.topOffset}px;
  left: ${(props) =>
    props.$isLeft
      ? Sizing.PlayerBoostBar.sideOffset.toString() + "px"
      : (
          1920 -
          (Sizing.PlayerBoostBar.width + Sizing.PlayerBoostBar.sideOffset)
        ).toString() + "px"};
`;
