import { USGame } from "./USGame";

export interface UpdateState {
  event: string;
  game: USGame;
  hasGame: boolean;
  match_guid?: string;
  players: Object;
}

/**
 * The players field is like the following:
 * Bandit_0: USPlayers,
 * Arcane_1: USPlayers,
 * ...
 */
