import { styled } from "styled-components";
import Sizing from "../../constants/sizing.json";

export const PlayerBoostBarWrapper = styled.div<{
  $primaryColor: string;
  $secondaryColor: string;
  $isSpectating: boolean;
  $isLeft: boolean;
  $index: number;
}>`
  height: 36px;
  width: ${Sizing.PlayerBoostBar.width};
  background: ${(props) =>
    props.$isSpectating ? "#FFFFFF" : props.$primaryColor};
  color: ${(props) => props.$secondaryColor};
  font-size: ${Sizing.PlayerBoostBar.fontSize};
  margin-bottom: ${Sizing.PlayerBoostBar.bottomPadding};
`;

export const PlayerBoostBarDefaultBar = styled.div<{ $index: number }>`
  height: ${Sizing.PlayerBoostBar.boostBarHeight};
  width: ${Sizing.PlayerBoostBar.width};
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: ${(props) => props.$index * 52 + 24}px;
`;

export const PlayerBoostBarSlidingBar = styled.div<{
  $color: string;
  $width: number;
  $index: number;
}>`
  height: ${Sizing.PlayerBoostBar.boostBarHeight};
  width: ${(props) => props.$width}px;
  background: ${(props) => props.$color};
  position: absolute;
  top: ${(props) => props.$index * 52 + 24}px;
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
  font-size: ${Sizing.PlayerBoostBar.fontSize};
  padding-left: ${(props) => (props.$isBoost ? "0px" : "8px")};
  padding-right: ${(props) => (props.$isBoost ? "8px" : "0px")};
  padding-top: 2px;
  padding-bottom: 2px;
`;
