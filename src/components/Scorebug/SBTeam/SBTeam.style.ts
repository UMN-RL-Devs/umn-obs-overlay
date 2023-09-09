import { styled } from "styled-components";
import Sizing from "../../../constants/sizing.json";

export const SBLeftTeamTrapezoid = styled.div<{
  $primary: string;
}>`
  border-top: ${Sizing.Scorebug.clock.bottomWidth}px solid
    ${(props) => props.$primary};
  border-left: ${Sizing.Scorebug.height}px solid transparent;
  border-right: ${Sizing.Scorebug.height}px solid transparent;
  height: 0;
  width: ${Sizing.Scorebug.clock.topWidth}px;
  position: absolute;
  left: 25%;
  top: ${Sizing.PlayerBoostBar.topOffset}px;
`;

export const SBLeftTeamSecondary = styled.div<{
  $secondary: string;
}>`
  border-top: ${Sizing.Scorebug.clock.bottomWidth}px solid
    ${(props) => props.$secondary};
  border-left: ${Sizing.Scorebug.height}px solid transparent;
  border-right: ${Sizing.Scorebug.height}px solid transparent;
  height: 0;
  width: ${Sizing.Scorebug.clock.topWidth}px;
  position: absolute;
  left: 24.25%;
  top: ${Sizing.PlayerBoostBar.topOffset}px;
`;

export const SBRightTeamTrapezoid = styled.div<{
  $primary: string;
}>`
  border-top: ${Sizing.Scorebug.clock.bottomWidth}px solid
    ${(props) => props.$primary};
  border-left: ${Sizing.Scorebug.height}px solid transparent;
  border-right: ${Sizing.Scorebug.height}px solid transparent;
  height: 0;
  width: ${Sizing.Scorebug.clock.topWidth}px;
  position: absolute;
  left: 49.15%;
  top: ${Sizing.PlayerBoostBar.topOffset}px;
`;

export const SBRightTeamSecondary = styled.div<{
  $secondary: string;
}>`
  border-top: ${Sizing.Scorebug.clock.bottomWidth}px solid
    ${(props) => props.$secondary};
  border-left: ${Sizing.Scorebug.height}px solid transparent;
  border-right: ${Sizing.Scorebug.height}px solid transparent;
  height: 0;
  width: ${Sizing.Scorebug.clock.topWidth}px;
  position: absolute;
  left: 49.9%;
  top: ${Sizing.PlayerBoostBar.topOffset}px;
`;

export const SBLeftTeamText = styled.p`
  font-size: ${Sizing.Scorebug.team.fontSize}px;
  position: absolute;
  left: 29%;
  top: -48px;
  color: white;
  font-family: bahnschrift;
`;

export const SBRightTeamText = styled.p`
  font-size: ${Sizing.Scorebug.team.fontSize}px;
  position: absolute;
  left: 69.2%;
  top: -48px;
  color: white;
  font-family: bahnschrift;
`;

export const SBLeftTeamImage = styled.img`
  position: absolute;
  left: 32%;
  top: 30px;
  height: ${Sizing.Scorebug.team.logoHeight}px;
  width: ${Sizing.Scorebug.team.logoWidth}px;
`;

export const SBRightTeamImage = styled.img`
  position: absolute;
  left: 63.2%;
  top: 30px;
  height: ${Sizing.Scorebug.team.logoHeight}px;
  width: ${Sizing.Scorebug.team.logoWidth}px;
`;
