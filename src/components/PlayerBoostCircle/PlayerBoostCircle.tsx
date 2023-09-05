import {
  PlayerBoostCircleDefaultRing,
  PlayerBoostCircleImage,
  PlayerBoostCircleInnerCircle,
  PlayerBoostCircleRing,
  PlayerBoostCircleText,
  PlayerBoostCircleWrapper,
} from "./PlayerBoostCircle.style";
import Sizing from "../../constants/sizing.json";
import { BoostService } from "../../services/boostService";

interface PlayerBoostCircleProps {
  boost: number;
  primaryColor: string;
  secondaryColor: string;
  logoUrl: string;
}

export const PlayerBoostCircle = (props: PlayerBoostCircleProps) => {
  const { boost, primaryColor, secondaryColor, logoUrl } = props;

  const normalizedRadius =
    Sizing.PlayerBoostMeter.innerCircle.radius -
    Sizing.PlayerBoostMeter.boostRing.thickness * 2;

  const circumference = normalizedRadius * 2 * Math.PI;

  return (
    <PlayerBoostCircleWrapper>
      <svg
        height={Sizing.PlayerBoostMeter.innerCircle.radius * 2}
        width={Sizing.PlayerBoostMeter.innerCircle.radius * 2}
      >
        <PlayerBoostCircleDefaultRing
          stroke="#00000088"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeWidth={Sizing.PlayerBoostMeter.boostRing.thickness}
          fill="transparent"
          r={normalizedRadius}
          cx={Sizing.PlayerBoostMeter.innerCircle.radius}
          cy={Sizing.PlayerBoostMeter.innerCircle.radius}
        />
        <PlayerBoostCircleRing
          stroke={secondaryColor}
          strokeDasharray={`${circumference} ${circumference}`}
          $dashOffset={BoostService.getBoostBarCircumference(
            boost,
            circumference
          )}
          strokeWidth={Sizing.PlayerBoostMeter.boostRing.thickness}
          fill="transparent"
          r={normalizedRadius}
          cx={Sizing.PlayerBoostMeter.innerCircle.radius}
          cy={Sizing.PlayerBoostMeter.innerCircle.radius}
        />
        <PlayerBoostCircleInnerCircle
          $color={primaryColor}
          cx="50%"
          cy="50%"
          r={normalizedRadius - Sizing.PlayerBoostMeter.boostRing.thickness / 2}
          fill={primaryColor}
        />
        <PlayerBoostCircleImage
          href={logoUrl}
          height={Sizing.PlayerBoostMeter.innerCircle.logoHeight}
          width={Sizing.PlayerBoostMeter.innerCircle.logoWidth}
          x={Sizing.PlayerBoostMeter.innerCircle.radius / 2}
          y={(Sizing.PlayerBoostMeter.innerCircle.radius + 28) / 2}
        />
        <PlayerBoostCircleText
          $fontSize={Sizing.PlayerBoostMeter.innerCircle.fontSize}
          x="50%"
          y="50%"
          textAnchor="middle"
          fill={secondaryColor}
          dy=".3em"
        >
          {boost}
        </PlayerBoostCircleText>
      </svg>
    </PlayerBoostCircleWrapper>
  );
};
