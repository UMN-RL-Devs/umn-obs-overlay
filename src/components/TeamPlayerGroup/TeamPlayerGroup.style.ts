import { styled } from "styled-components";
import Sizing from "../../constants/sizing.json";

export const TeamPlayerGroupWrapper = styled.div<{ $isLeft: boolean }>`
  position: absolute;
  top: ${Sizing.PlayerBoostBar.topOffset};
  left: ${(props) =>
    props.$isLeft
      ? Sizing.PlayerBoostBar.sideOffset
      : (1920 - 360).toString() + "px"};
`;
