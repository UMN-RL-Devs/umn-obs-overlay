import { styled } from "styled-components";
import Sizing from "../../constants/sizing.json";

export const PlayerStatCardWrapper = styled.div<{
  $primary: string;
  $secondary: string;
}>`
  background: ${(props) => props.$primary};
  color: ${(props) => props.$secondary};
  position: absolute;
  left: ${Sizing.PlayerBoostBar.sideOffset}px;
  bottom: 80px;
  height: ${Sizing.PlayerStatCard.height}px;
  width: ${Sizing.PlayerStatCard.width}px;
  font-family: bahnschrift;
  text-align: center;
`;

export const PSCPlayerText = styled.p`
  font-size: ${Sizing.PlayerStatCard.playerName.fontSize}px;
  margin: 0;
  padding-top: 4px;
`;

export const PSCSecondaryBar = styled.div<{
  $primary: string;
  $secondary: string;
}>`
  position: absolute;
  height: ${Sizing.PlayerStatCard.secondaryBar.height}px;
  width: ${Sizing.PlayerStatCard.width}px;
  background: ${(props) => props.$secondary};
  color: ${(props) => props.$primary};
`;

export const PSCSecondaryBarText = styled.p`
  font-size: ${Sizing.PlayerStatCard.secondaryBar.fontSize}px;
  margin: 0;
  margin-top: 4px;
  font-weight: bold;
`;

export const PSCStatWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: ${Sizing.PlayerStatCard.width}px;
`;

export const PSCStatName = styled.p`
  font-size: ${Sizing.PlayerStatCard.stats.statNameSize}px;
  margin: 0;
`;

export const PSCStatValue = styled.p`
  font-size: ${Sizing.PlayerStatCard.stats.statValueSize}px;
  margin: 0;
`;
