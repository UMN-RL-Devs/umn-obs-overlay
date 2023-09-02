import React, { useEffect, useState } from "react";
import { WebsocketService } from "./services/websocketService";
import { UpdateState } from "./models/Game/UpdateStateEvent/UpdateState";
import {
  DEFAULT_GAME_CONTEXT,
  GameStoreContext,
} from "./contexts/GameStoreContext";
import { GameContext } from "./models/GameContext/GameContext";
import { Player } from "./models/GameContext/Player";
import { USPlayers } from "./models/Game/UpdateStateEvent/USPlayers";

const App = () => {
  const [gameInfo, setGameInfo] = useState<GameContext>(DEFAULT_GAME_CONTEXT);

  useEffect(() => {
    WebsocketService.init(49322, false);
    WebsocketService.subscribe("game", "update_state", (data: UpdateState) => {
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
  }, []);

  return (
    <GameStoreContext.Provider value={gameInfo}>
      <div>Overlay components here</div>
    </GameStoreContext.Provider>
  );
};

export default App;
