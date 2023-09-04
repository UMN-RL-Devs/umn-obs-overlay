import { BoostService } from "../../services/boostService";
import {
  PlayerBoostBarDefaultBar,
  PlayerBoostBarSlidingBar,
  PlayerBoostBarText,
  PlayerBoostBarTextWrapper,
  PlayerBoostBarWrapper,
} from "./PlayerBoostBar.style";

interface PlayerBoostBarProps {
  isLeft: boolean;
  playerName: string;
  boostAmount: number;
  primaryColor: string;
  secondaryColor: string;
  isSpectating: boolean;
  index: number;
}

export const PlayerBoostBar = (props: PlayerBoostBarProps) => {
  const {
    isLeft,
    playerName,
    boostAmount,
    primaryColor,
    secondaryColor,
    isSpectating,
    index,
  } = props;

  return (
    <PlayerBoostBarWrapper
      $primaryColor={primaryColor}
      $secondaryColor={secondaryColor}
      $isSpectating={isSpectating}
      $isLeft={isLeft}
      $index={index}
    >
      <PlayerBoostBarTextWrapper>
        <PlayerBoostBarText $isBoost={false}>{playerName}</PlayerBoostBarText>
        <PlayerBoostBarText $isBoost={true}>{boostAmount}</PlayerBoostBarText>
      </PlayerBoostBarTextWrapper>
      <PlayerBoostBarSlidingBar
        $color={secondaryColor}
        $width={BoostService.getBoostBarWidth(boostAmount, 340)}
        $index={index}
      />
      <PlayerBoostBarDefaultBar $index={index} />
    </PlayerBoostBarWrapper>
  );
};
