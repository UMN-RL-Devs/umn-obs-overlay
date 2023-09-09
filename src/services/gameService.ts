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

const getClockFromSeconds = (seconds: number): string => {
  const numMinutes = Math.floor(seconds / 60);
  const numSeconds = seconds - numMinutes * 60;
  const numSecondsString: string =
    numSeconds > 9 ? numSeconds.toString() : `0${numSeconds}`;
  return `${numMinutes}:${numSecondsString}`;
};

export const GameService = {
  getOrangeTeam,
  getBlueTeam,
  getPlayerFromTarget,
  getClockFromSeconds,
};
