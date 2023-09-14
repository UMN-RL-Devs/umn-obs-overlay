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
import { Statfeed } from "../../models/Game/StatfeedEvent/Statfeed";
import { StoredGoal } from "../../models/Game/StatfeedEvent/StoredGoal";
import StatfeedEvents from "../../constants/statfeed.json";
import { GoalScored } from "../../models/Game/GoalScoredEvent/GoalScored";
import { GoalReplay } from "../../components/GoalReplay/GoalReplay";
import { Postgame } from "../../components/Postgame/Postgame";

interface OverlayProps {
  configContext: OverlayContext;
}

export const Overlay = (props: OverlayProps) => {
  const { configContext } = props;
  const [gameInfo, setGameInfo] = useState<GameContext>(DEFAULT_GAME_CONTEXT);
  const [hasSetWinner, setHasSetWinner] = useState<boolean>(false);
  const [showingPodium, setShowingPodium] = useState<boolean>(false);
  const [lastGoalScored, setLastGoalScored] = useState<StoredGoal | null>(null);
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
        isReplay: data.game.isReplay,
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
      setShowingPodium(false);
      setLastGoalScored(null);
      setGameInfo({
        ...gameInfo,
        players: [],
      });
    });

    websocket.subscribe("game", "podium_start", (data: string) => {
      setShowingPodium(true);
    });

    websocket.subscribe("game", "statfeed_event", (data: Statfeed) => {
      if (data.event_name === StatfeedEvents.GOAL_EVENT) {
        setLastGoalScored({
          scorer: data.main_target.name,
          passer:
            data.secondary_target.team_num === -1
              ? undefined
              : data.secondary_target.name,
          speed: lastGoalScored !== null ? lastGoalScored.speed : -1,
          team: data.main_target.team_num,
        });
      } else if (
        data.event_name === StatfeedEvents.ASSIST_EVENT &&
        lastGoalScored !== null
      ) {
        setLastGoalScored({
          ...lastGoalScored,
          passer: data.main_target.name,
        });
      } else if (data.event_name === StatfeedEvents.SAVE_EVENT) {
      } else if (data.event_name === StatfeedEvents.SHOT_EVENT) {
      } else if (data.event_name === StatfeedEvents.EPIC_SAVE_EVENT) {
      } else if (data.event_name === StatfeedEvents.WIN_EVENT) {
      } else if (data.event_name === StatfeedEvents.MVP_EVENT) {
      } else if (data.event_name === StatfeedEvents.LONG_GOAL_EVENT) {
      } else {
        console.log("STATFEED EVENT: ", data);
      }
    });

    websocket.subscribe("game", "goal_scored", (data: GoalScored) => {
      if (lastGoalScored) {
        setLastGoalScored({
          ...lastGoalScored,
          speed: data.goalspeed,
        });
      }
    });
  });

  return (
    <>
      {!showingPodium && !hasSetWinner && (
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
            clock={GameService.getClockFromSeconds(
              gameInfo.timeRemaining,
              gameInfo.isOT
            )}
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
          {!gameInfo.isReplay && gameInfo.target !== "" && (
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
          {gameInfo.isReplay && lastGoalScored && (
            <GoalReplay
              scorer={lastGoalScored.scorer}
              passer={lastGoalScored.passer}
              speed={Math.round(lastGoalScored.speed)}
              teamPrimary={
                lastGoalScored.team === 0
                  ? configContext.blue.primary
                  : configContext.orange.primary
              }
              teamSecondary={
                lastGoalScored.team === 0
                  ? configContext.blue.secondary
                  : configContext.orange.secondary
              }
            />
          )}
        </>
      )}
      {showingPodium && hasSetWinner && (
        <Postgame
          blueTeam={GameService.getBlueTeam(gameInfo.players)}
          orangeTeam={GameService.getOrangeTeam(gameInfo.players)}
        />
      )}
    </>
  );
};
