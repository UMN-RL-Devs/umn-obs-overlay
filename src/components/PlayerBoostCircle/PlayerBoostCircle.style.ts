import { styled } from "styled-components";
import Sizing from "../../constants/sizing.json";

export const PlayerBoostCircleWrapper = styled.div`
  background-color: #0000;
  position: absolute;
  bottom: 50px;
  right: 25px;
  height: ${(Sizing.PlayerBoostMeter.boostRing.thickness +
    Sizing.PlayerBoostMeter.innerCircle.radius) *
  2}px;
  width: ${(Sizing.PlayerBoostMeter.boostRing.thickness +
    Sizing.PlayerBoostMeter.innerCircle.radius) *
  2}px;
  margin: 0px auto;
  overflow: hidden;
  transform-origin: 0 0;

  svg > circle {
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
`;

export const PlayerBoostCircleInnerCircle = styled.circle<{ $color: string }>``;

export const PlayerBoostCircleRing = styled.circle<{ $dashOffset: number }>`
  stroke-dashoffset: ${(props) => props.$dashOffset};
`;

export const PlayerBoostCircleDefaultRing = styled.circle`
  color: rgba(0, 0, 0, 0.5);
  stroke-dashoffset: 0;
`;

export const PlayerBoostCircleImage = styled.image`
  opacity: 0.3;
  object-fit: contain;
  z-index: 4;
`;

export const PlayerBoostCircleText = styled.text<{ $fontSize: number }>`
  font-family: bahnschrift;
  font-size: ${(props) => props.$fontSize}px;
  text-shadow: 1px 1px 10px black;
  z-index: 5;
`;
