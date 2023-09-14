import { styled } from "styled-components";
import Sizing from "../../../constants/sizing.json";

export const PGHeaderMainWrapper = styled.div`
  position: absolute;
  top: ${Sizing.PlayerBoostBar.topOffset}px;
  left: 23.9%;
  display: flex;
  flex-flow: row nowrap;
  width: 1000px;
  height: 200px;
  justify-content: space-evenly;
  align-items: center;
  font-family: bahnschrift;
  text-align: center;
  font-size: ${Sizing.Postgame.abbreviatons.fontSize}px;
  font-weight: 700;
`;

export const PGHeaderAbbrev = styled.p``;

export const PGHeaderScore = styled.p`
  margin: 0;
`;

export const PGHeaderImage = styled.img`
  height: ${Sizing.Postgame.logo.height}px;
  width: ${Sizing.Postgame.logo.width}px;
`;
