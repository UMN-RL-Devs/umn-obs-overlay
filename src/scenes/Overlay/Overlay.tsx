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

interface OverlayProps {
  configContext: OverlayContext;
}

export const Overlay = (props: OverlayProps) => {
  const { configContext } = props;
  const [gameInfo, setGameInfo] = useState<GameContext>(DEFAULT_GAME_CONTEXT);
  const websocket = useContext(ServiceContext);

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
    </>
  );
};
