import { styled } from "styled-components";
import Sizing from "../../constants/sizing.json";

export const GoalReplayWrapper = styled.div<{
  $primary: string;
  $secondary: string;
}>`
  width: 1920px;
  height: ${Sizing.GoalReplay.height}px;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  background: ${(props) => props.$primary};
  color: ${(props) => props.$secondary};
  text-align: center;
  font-family: bahnschrift;
  border-top: 12px solid ${(props) => props.$secondary};
`;

export const GoalReplayScorer = styled.p`
  font-size: ${Sizing.GoalReplay.scorer.fontSize}px;
  z-index: 3;
`;

export const GoalReplayPasser = styled.p`
  font-size: ${Sizing.GoalReplay.passer.fontSize}px;
  z-index: 3;
`;

export const GoalReplaySpeed = styled.p`
  font-size: ${Sizing.GoalReplay.speed.fontSize}px;
  z-index: 3;
`;
