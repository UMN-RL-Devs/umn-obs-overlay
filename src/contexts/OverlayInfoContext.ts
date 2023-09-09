import { createContext } from "react";
import { OverlayContext } from "../models/OverlayContext/OverlayContext";
import GeneralConstants from "../constants/constants.json";

export const DEFAULT_OVERLAY_CONTEXT: OverlayContext = {
  blue: {
    abbreviation: "",
    avatar: "",
    primary: GeneralConstants.BLUE_TEAM_PRIMARY,
    secondary: GeneralConstants.BLUE_TEAM_SECONDARY,
  },
  orange: {
    abbreviation: "",
    avatar: "",
    primary: GeneralConstants.ORANGE_TEAM_PRIMARY,
    secondary: GeneralConstants.ORANGE_TEAM_SECONDARY,
  },
  seriesLength: -1,
};

export const OverlayInfoContext = createContext({
  overlayInfo: DEFAULT_OVERLAY_CONTEXT,
  setOverlayInfo: (newOverlayInfo: OverlayContext) => {},
});
