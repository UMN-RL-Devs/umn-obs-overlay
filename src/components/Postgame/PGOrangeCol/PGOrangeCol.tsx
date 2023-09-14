import { Player } from "../../../models/GameContext/Player";
import {
  PGOrangeColCol,
  PGOrangeColPlayerName,
  PGOrangeColStatText,
  PGOrangeColWrapper,
} from "./PGOrangeCol.style";

interface PGOrangeColProps {
  players: Player[];
}

export const PGOrangeCol = (props: PGOrangeColProps) => {
  const { players } = props;

  return (
    <PGOrangeColWrapper>
      {players.map((player) => (
        <PGOrangeColCol>
          <PGOrangeColPlayerName>
            {player.name.toUpperCase()}
          </PGOrangeColPlayerName>
          <PGOrangeColStatText>{player.score}</PGOrangeColStatText>
          <PGOrangeColStatText>{player.goals}</PGOrangeColStatText>
          <PGOrangeColStatText>{player.assists}</PGOrangeColStatText>
          <PGOrangeColStatText>{player.shots}</PGOrangeColStatText>
          <PGOrangeColStatText>{player.saves}</PGOrangeColStatText>
          <PGOrangeColStatText>{player.demos}</PGOrangeColStatText>
        </PGOrangeColCol>
      ))}
    </PGOrangeColWrapper>
  );
};
