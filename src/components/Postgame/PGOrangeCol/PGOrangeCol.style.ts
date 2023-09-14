import { styled } from "styled-components";
import Sizing from "../../../constants/sizing.json";

export const PGOrangeColWrapper = styled.div`
  position: absolute;
  left: ${Sizing.Postgame.playerNames.sideOffset + 790}px;
  top: ${Sizing.Postgame.playerNames.topOffset}px;
  display: flex;
  flex-flow: row nowrap;
  text-align: center;
  justify-content: space-evenly;
  height: 702px;
  width: 700px;
`;

export const PGOrangeColCol = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const PGOrangeColPlayerName = styled.p`
  font-size: ${Sizing.Postgame.playerNames.fontSize}px;
  font-weight: 700;
  margin: 0;
`;

export const PGOrangeColStatText = styled.p`
  font-size: ${Sizing.Postgame.statValues.fontSize}px;
  margin: 0;
  font-weight: 300;
`;
