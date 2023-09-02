import { Player } from "../models/GameContext/Player";

const getOrangeTeam = (players: Player[]): Player[] => {
  return players.filter((player) => player.team === 1);
};

const getBlueTeam = (players: Player[]): Player[] => {
  return players.filter((player) => player.team === 0);
};

export const GameService = {
  getOrangeTeam,
  getBlueTeam,
};
