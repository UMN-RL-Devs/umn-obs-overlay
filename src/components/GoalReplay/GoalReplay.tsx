import {
  GoalReplayPasser,
  GoalReplayScorer,
  GoalReplaySpeed,
  GoalReplayWrapper,
} from "./GoalReplay.style";

interface GoalReplayProps {
  scorer: string;
  passer: string | undefined;
  speed: number;
  teamPrimary: string;
  teamSecondary: string;
}

export const GoalReplay = (props: GoalReplayProps) => {
  const { scorer, passer, speed, teamPrimary, teamSecondary } = props;
  return (
    <GoalReplayWrapper $primary={teamPrimary} $secondary={teamSecondary}>
      {passer !== undefined && (
        <GoalReplayPasser>{`Assist: ${passer}`}</GoalReplayPasser>
      )}
      <GoalReplayScorer>Goal: {scorer}</GoalReplayScorer>
      <GoalReplaySpeed>Speed: {speed} KPH</GoalReplaySpeed>
    </GoalReplayWrapper>
  );
};
