import { createContext } from "react";
import { GameContext } from "../models/GameContext/GameContext";

export const DEFAULT_GAME_CONTEXT = {
  arena: "",
  isOT: false,
  target: "",
  timeRemaining: 300,
  winner: "",
  players: [],
};

export const GameStoreContext =
  createContext<GameContext>(DEFAULT_GAME_CONTEXT);
