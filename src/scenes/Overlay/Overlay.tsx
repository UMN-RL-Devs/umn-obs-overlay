import { useContext, useEffect, useState } from "react";
import { Player } from "../../models/GameContext/Player";
import { UpdateState } from "../../models/Game/UpdateStateEvent/UpdateState";
import { USPlayers } from "../../models/Game/UpdateStateEvent/USPlayers";
import { GameContext } from "../../models/GameContext/GameContext";
import { DEFAULT_GAME_CONTEXT } from "../../contexts/GameStoreContext";
import { TeamPlayerGroup } from "../../components/TeamPlayerGroup/TeamPlayerGroup";
import { GameService } from "../../services/gameService";
import { OverlayContext } from "../../models/OverlayContext/OverlayContext";
import { ServiceContext } from "../../contexts/ServiceContext";
import { PlayerBoostCircle } from "../../components/PlayerBoostCircle/PlayerBoostCircle";

interface OverlayProps {
  configContext: OverlayContext;
}

export const Overlay = (props: OverlayProps) => {
  const { configContext } = props;
  const [gameInfo, setGameInfo] = useState<GameContext>(DEFAULT_GAME_CONTEXT);
  const websocket = useContext(ServiceContext);
  const spectatedPlayer = GameService.getPlayerFromTarget(
    gameInfo.players,
    gameInfo.target
  );

  useEffect(() => {
    websocket.subscribe("game", "update_state", (data: UpdateState) => {
      const updatedPlayers: Player[] = Object.values(data.players).map(
        (playerInfo: USPlayers) => {
          return {
            assists: playerInfo.assists,
            boost: playerInfo.boost,
            cartouches: playerInfo.cartouches,
            demos: playerInfo.demos,
            goals: playerInfo.goals,
            name: playerInfo.name,
            saves: playerInfo.saves,
            score: playerInfo.score,
            shots: playerInfo.shots,
            spectatorShortcut: playerInfo.shortcut,
            team: playerInfo.team,
            touches: playerInfo.touches,
          };
        }
      );

      setGameInfo({
        arena: data.game.arena,
        isOT: data.game.isOT,
        target: data.game.target,
        timeRemaining: data.game.time_seconds,
        winner: data.game.winner,
        players: updatedPlayers,
      });
    });
  });
  return (
    <>
      <TeamPlayerGroup
        players={GameService.getBlueTeam(gameInfo.players)}
        isLeft={true}
        primaryColor={configContext.blue.primary}
        secondaryColor={configContext.blue.secondary}
        currentTarget={gameInfo.target}
      />
      <TeamPlayerGroup
        players={GameService.getOrangeTeam(gameInfo.players)}
        isLeft={false}
        primaryColor={configContext.orange.primary}
        secondaryColor={configContext.orange.secondary}
        currentTarget={gameInfo.target}
      />
      {gameInfo.target !== "" && (
        <PlayerBoostCircle
          boost={spectatedPlayer!.boost}
          primaryColor={
            spectatedPlayer!.team === 0
              ? configContext.blue.primary
              : configContext.orange.primary
          }
          secondaryColor={
            spectatedPlayer!.team === 0
              ? configContext.blue.secondary
              : configContext.orange.secondary
          }
          logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/University_of_Minnesota_Logo.svg/2560px-University_of_Minnesota_Logo.svg.png"
        />
      )}
    </>
  );
};
