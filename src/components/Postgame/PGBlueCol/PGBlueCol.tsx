import { Player } from "../../../models/GameContext/Player";
import {
  PGBlueColCol,
  PGBlueColPlayerName,
  PGBlueColStatText,
  PGBlueColWrapper,
} from "./PGBlueCol.style";

interface PGBlueColProps {
  players: Player[];
}

export const PGBlueCol = (props: PGBlueColProps) => {
  const { players } = props;
  return (
    <PGBlueColWrapper>
      {players.map((player) => (
        <PGBlueColCol>
          <PGBlueColPlayerName>{player.name.toUpperCase()}</PGBlueColPlayerName>
          <PGBlueColStatText>{player.score}</PGBlueColStatText>
          <PGBlueColStatText>{player.goals}</PGBlueColStatText>
          <PGBlueColStatText>{player.assists}</PGBlueColStatText>
          <PGBlueColStatText>{player.shots}</PGBlueColStatText>
          <PGBlueColStatText>{player.saves}</PGBlueColStatText>
          <PGBlueColStatText>{player.demos}</PGBlueColStatText>
        </PGBlueColCol>
      ))}
    </PGBlueColWrapper>
  );
};
