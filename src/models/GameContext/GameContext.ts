import { Player } from "./Player";

interface GameScore {
  blue: number;
  orange: number;
}
export interface GameContext {
  arena: string;
  isOT: boolean;
  target: string;
  timeRemaining: number;
  winner: string;
  players: Player[];
  score: GameScore;
  series: GameScore;
}
