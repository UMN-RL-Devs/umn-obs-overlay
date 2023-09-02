import { Player } from "./Player";

export interface GameContext {
  arena: string;
  isOT: boolean;
  target: string;
  timeRemaining: number;
  winner: string;
  players: Player[];
}
