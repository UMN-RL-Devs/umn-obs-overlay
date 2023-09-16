import { styled } from "styled-components";
import Sizing from "../../constants/sizing.json";

export const PlayerBoostBarWrapper = styled.div<{
  $primaryColor: string;
  $secondaryColor: string;
  $isSpectating: boolean;
  $isLeft: boolean;
  $index: number;
}>`
  height: ${Sizing.PlayerBoostBar.height}px;
  width: ${(props) =>
    props.$isSpectating
      ? Sizing.PlayerBoostBar.width - 6
      : Sizing.PlayerBoostBar.width}px;
  background: ${(props) => props.$primaryColor};
  color: ${(props) => props.$secondaryColor};
  font-size: ${Sizing.PlayerBoostBar.fontSize}px;
  margin-bottom: ${Sizing.PlayerBoostBar.bottomPadding}px;
  ${(props) =>
    props.$isSpectating
      ? `
    font-weight: 800;
    border-right: 6px solid white;  
  `
      : ""}
`;

export const PlayerBoostBarDefaultBar = styled.div<{ $index: number }>`
  height: ${Sizing.PlayerBoostBar.boostBarHeight}px;
  width: ${Sizing.PlayerBoostBar.width}px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: ${(props) => props.$index * 52.8 + 37}px;
`;

export const PlayerBoostBarSlidingBar = styled.div<{
  $color: string;
  $width: number;
  $index: number;
}>`
  height: ${Sizing.PlayerBoostBar.boostBarHeight}px;
  width: ${(props) => props.$width}px;
  background: ${(props) => props.$color};
  position: absolute;
  top: ${(props) => props.$index * 52.8 + 37}px;
  z-index: 9999;
`;

export const PlayerBoostBarTextWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export const PlayerBoostBarText = styled.p<{ $isBoost: boolean }>`
  padding: 0;
  margin: 0;
  font-size: ${Sizing.PlayerBoostBar.fontSize}px;
  padding-left: ${(props) => (props.$isBoost ? "0px" : "8px")};
  padding-right: ${(props) => (props.$isBoost ? "8px" : "0px")};
  padding-top: 2px;
  padding-bottom: 2px;
`;
