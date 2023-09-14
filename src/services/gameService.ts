import { Player } from "../models/GameContext/Player";

const getOrangeTeam = (players: Player[]): Player[] => {
  return players.filter((player) => player.team === 1);
};

const getBlueTeam = (players: Player[]): Player[] => {
  return players.filter((player) => player.team === 0);
};

const getPlayerFromTarget = (
  players: Player[],
  target: string
): Player | undefined => {
  return players.find((player) => target.includes(player.name));
};

const getClockFromSeconds = (seconds: number, isOT: boolean): string => {
  const numMinutes = Math.floor(seconds / 60);
  const numSeconds = seconds - numMinutes * 60;
  const numSecondsString: string =
    numSeconds > 9 ? numSeconds.toString() : `0${numSeconds}`;
  return isOT
    ? `+${numMinutes}:${numSecondsString}`
    : `${numMinutes}:${numSecondsString}`;
};

const getScoreFromPlayers = (players: Player[]) => {
  return players.map((player) => player.score);
};

const getGoalsFromPlayers = (players: Player[]): number[] => {
  return players.map((player) => player.goals);
};

const getAssistsFromPlayers = (players: Player[]) => {
  return players.map((player) => player.assists);
};

const getShotsFromPlayers = (players: Player[]) => {
  return players.map((player) => player.shots);
};

const getSavesFromPlayers = (players: Player[]) => {
  return players.map((player) => player.saves);
};

const getDemosFromPlayers = (players: Player[]) => {
  return players.map((player) => player.demos);
};

export const GameService = {
  getOrangeTeam,
  getBlueTeam,
  getPlayerFromTarget,
  getClockFromSeconds,
  getScoreFromPlayers,
  getGoalsFromPlayers,
  getAssistsFromPlayers,
  getShotsFromPlayers,
  getSavesFromPlayers,
  getDemosFromPlayers,
};
