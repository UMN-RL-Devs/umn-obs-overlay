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
import { Scorebug } from "../../components/Scorebug/Scorebug";
import { MatchEnded } from "../../models/Game/MatchEndedEvent/MatchEnded";

interface OverlayProps {
  configContext: OverlayContext;
}

export const Overlay = (props: OverlayProps) => {
  const { configContext } = props;
  const [gameInfo, setGameInfo] = useState<GameContext>(DEFAULT_GAME_CONTEXT);
  const [hasSetWinner, setHasSetWinner] = useState<boolean>(false);
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
        score: {
          blue: data.game.teams[0].score,
          orange: data.game.teams[1].score,
        },
        series: {
          blue: gameInfo.series.blue,
          orange: gameInfo.series.orange,
        },
      });
    });

    websocket.subscribe("game", "match_ended", (data: MatchEnded) => {
      if (!hasSetWinner) {
        const blueSeriesScore = gameInfo.series.blue;
        const orangeSeriesScore = gameInfo.series.orange;

        setGameInfo({
          ...gameInfo,
          series: {
            blue:
              data.winner_team_num === 0
                ? blueSeriesScore + 1
                : blueSeriesScore,
            orange:
              data.winner_team_num === 1
                ? orangeSeriesScore + 1
                : orangeSeriesScore,
          },
        });

        setHasSetWinner(true);
      }
    });

    websocket.subscribe("game", "match_created", (data: string) => {
      setHasSetWinner(false);
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
      <Scorebug
        clock={GameService.getClockFromSeconds(gameInfo.timeRemaining)}
        blueTeamPrimary={configContext.blue.primary}
        orangeTeamPrimary={configContext.orange.primary}
        blueTeamScore={gameInfo.score.blue}
        orangeTeamScore={gameInfo.score.orange}
        blueTeamImage={configContext.blue.avatar}
        orangeTeamImage={configContext.orange.avatar}
        blueTeamSecondary={configContext.blue.secondary}
        orangeTeamSecondary={configContext.orange.secondary}
        seriesLength={configContext.seriesLength}
        blueTeamWins={gameInfo.series.blue}
        orangeTeamWins={gameInfo.series.orange}
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
          logoUrl={
            spectatedPlayer!.team === 0
              ? configContext.blue.avatar
              : configContext.orange.avatar
          }
        />
      )}
    </>
  );
};
