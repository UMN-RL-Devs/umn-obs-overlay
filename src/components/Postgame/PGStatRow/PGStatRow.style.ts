import { styled } from "styled-components";
import Sizing from "../../../constants/sizing.json";

export const PGStatRowWrapper = styled.div`
  position: absolute;
  left: ${Sizing.Postgame.playerNames.sideOffset}px;
  top: ${Sizing.Postgame.playerNames.topOffset + 100}px;
  height: 420px;
  width: 1488px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const PGStatRowRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border-bottom: 6px solid grey;
`;

export const PGStatRowStatText = styled.p`
  font-size: ${Sizing.Postgame.statValues.fontSize}px;
  font-weight: 400;
`;

export const PGStatRowStatName = styled.p`
  font-size: ${Sizing.Postgame.statNames.fontSize}px;
  font-weight: 600;
`;
