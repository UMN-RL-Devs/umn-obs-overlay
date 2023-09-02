import { Player } from "../../models/GameContext/Player";
import { PlayerBoostBar } from "../PlayerBoostBar/PlayerBoostBar";
import { TeamPlayerGroupWrapper } from "./TeamPlayerGroup.style";

interface TeamPlayerGroupProps {
  players: Player[];
  isLeft: boolean;
  primaryColor: string;
  secondaryColor: string;
  currentTarget: string;
}

export const TeamPlayerGroup = (props: TeamPlayerGroupProps) => {
  const { players, isLeft, primaryColor, secondaryColor, currentTarget } =
    props;
  return (
    <TeamPlayerGroupWrapper $isLeft={isLeft}>
      {players.map((player, index) => (
        <PlayerBoostBar
          isLeft={isLeft}
          playerName={player.name}
          boostAmount={player.boost}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          isSpectating={currentTarget.includes(player.name)}
          index={index}
        />
      ))}
    </TeamPlayerGroupWrapper>
  );
};
