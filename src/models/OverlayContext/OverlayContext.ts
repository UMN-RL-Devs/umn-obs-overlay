interface TeamContext {
  primary: string;
  secondary: string;
  avatar: string;
  abbreviation: string;
}

export interface OverlayContext {
  blue: TeamContext;
  orange: TeamContext;
  seriesLength: number;
}
