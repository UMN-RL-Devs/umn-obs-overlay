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

export const GameService = {
  getOrangeTeam,
  getBlueTeam,
  getPlayerFromTarget,
};
