import { createContext, useState } from "react";
import { OverlayContext } from "../models/OverlayContext/OverlayContext";
import GeneralConstants from "../constants/constants.json";

const DEFAULT_OVERLAY_CONTEXT: OverlayContext = {
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
};

const CreateOverlayInfoStateContext = () => {
  const [overlayInfoContext, setOverlayInfoContext] = useState<OverlayContext>(
    DEFAULT_OVERLAY_CONTEXT
  );
  return {
    overlayInfo: overlayInfoContext,
    setOverlayInfo: setOverlayInfoContext,
  };
};

export const OverlayInfoContext = createContext(
  CreateOverlayInfoStateContext()
);
