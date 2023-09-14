import { Player } from "../../../models/GameContext/Player";
import { GameService } from "../../../services/gameService";
import {
  PGStatRowRow,
  PGStatRowStatName,
  PGStatRowStatText,
  PGStatRowWrapper,
} from "./PGStatRow.style";

interface PGStatRowProps {
  blueTeam: Player[];
  orangeTeam: Player[];
}

export const PGStatRow = (props: PGStatRowProps) => {
  const { blueTeam, orangeTeam } = props;

  return (
    <PGStatRowWrapper>
      <PGStatRowRow>
        {GameService.getScoreFromPlayers(blueTeam).map((score) => (
          <PGStatRowStatText>{score}</PGStatRowStatText>
        ))}
        <PGStatRowStatName>SCORE</PGStatRowStatName>
        {GameService.getScoreFromPlayers(orangeTeam).map((score) => (
          <PGStatRowStatText>{score}</PGStatRowStatText>
        ))}
      </PGStatRowRow>
      <PGStatRowRow>
        {GameService.getGoalsFromPlayers(blueTeam).map((goal) => (
          <PGStatRowStatText>{goal}</PGStatRowStatText>
        ))}
        <PGStatRowStatName>GOALS</PGStatRowStatName>
        {GameService.getGoalsFromPlayers(orangeTeam).map((goal) => (
          <PGStatRowStatText>{goal}</PGStatRowStatText>
        ))}
      </PGStatRowRow>
      <PGStatRowRow>
        {GameService.getAssistsFromPlayers(blueTeam).map((assist) => (
          <PGStatRowStatText>{assist}</PGStatRowStatText>
        ))}
        <PGStatRowStatName>ASSISTS</PGStatRowStatName>
        {GameService.getAssistsFromPlayers(orangeTeam).map((assist) => (
          <PGStatRowStatText>{assist}</PGStatRowStatText>
        ))}
      </PGStatRowRow>
      <PGStatRowRow>
        {GameService.getShotsFromPlayers(blueTeam).map((shot) => (
          <PGStatRowStatText>{shot}</PGStatRowStatText>
        ))}
        <PGStatRowStatName>SHOTS</PGStatRowStatName>
        {GameService.getShotsFromPlayers(orangeTeam).map((shot) => (
          <PGStatRowStatText>{shot}</PGStatRowStatText>
        ))}
      </PGStatRowRow>
      <PGStatRowRow>
        {GameService.getSavesFromPlayers(blueTeam).map((save) => (
          <PGStatRowStatText>{save}</PGStatRowStatText>
        ))}
        <PGStatRowStatName>SAVES</PGStatRowStatName>
        {GameService.getSavesFromPlayers(orangeTeam).map((save) => (
          <PGStatRowStatText>{save}</PGStatRowStatText>
        ))}
      </PGStatRowRow>
      <PGStatRowRow>
        {GameService.getDemosFromPlayers(blueTeam).map((demo) => (
          <PGStatRowStatText>{demo}</PGStatRowStatText>
        ))}
        <PGStatRowStatName>DEMOS</PGStatRowStatName>
        {GameService.getDemosFromPlayers(orangeTeam).map((demo) => (
          <PGStatRowStatText>{demo}</PGStatRowStatText>
        ))}
      </PGStatRowRow>
    </PGStatRowWrapper>
  );
};
