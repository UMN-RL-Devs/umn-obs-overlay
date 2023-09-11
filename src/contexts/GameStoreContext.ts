import { createContext } from "react";
import { GameContext } from "../models/GameContext/GameContext";

export const DEFAULT_GAME_CONTEXT = {
  arena: "",
  isOT: false,
  isReplay: false,
  target: "",
  timeRemaining: 300,
  winner: "",
  players: [],
  score: {
    blue: 0,
    orange: 0,
  },
  series: {
    blue: 0,
    orange: 0,
  },
};

export const GameStoreContext =
  createContext<GameContext>(DEFAULT_GAME_CONTEXT);
