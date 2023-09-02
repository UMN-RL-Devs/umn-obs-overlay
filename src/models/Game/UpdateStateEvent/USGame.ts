import { USBall } from "./USBall";
import { USTeams } from "./USTeams";

export interface USGame {
  arena: string;
  ball: USBall;
  hasTarget: boolean;
  hasWinner: boolean;
  isOT: boolean;
  isReplay: boolean;
  target: string;
  teams: USTeams[];
  time_milliseconds: number;
  time_seconds: number;
  winner: string;
}
