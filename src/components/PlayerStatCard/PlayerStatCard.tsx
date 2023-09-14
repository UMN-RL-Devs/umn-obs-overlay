import {
  PSCPlayerText,
  PSCSecondaryBar,
  PSCSecondaryBarText,
  PSCStatName,
  PSCStatValue,
  PSCStatWrapper,
  PlayerStatCardWrapper,
} from "./PlayerStatCard.style";

interface PlayerStatCardProps {
  playerName: string;
  isUMN: boolean;
  goals: number;
  assists: number;
  saves: number;
  shots: number;
  primaryColor: string;
  secondaryColor: string;
}

export const PlayerStatCard = (props: PlayerStatCardProps) => {
  const {
    playerName,
    isUMN,
    goals,
    assists,
    saves,
    shots,
    primaryColor,
    secondaryColor,
  } = props;
  return (
    <PlayerStatCardWrapper $primary={primaryColor} $secondary={secondaryColor}>
      <PSCPlayerText>{playerName}</PSCPlayerText>
      <PSCSecondaryBar $primary={primaryColor} $secondary={secondaryColor}>
        {isUMN && (
          <PSCSecondaryBarText>
            UNIVERSITY OF MINNESOTA GOLDEN GOPHERS
          </PSCSecondaryBarText>
        )}
      </PSCSecondaryBar>
      <PSCStatWrapper>
        <div>
          <PSCStatName>GOALS</PSCStatName>
          <PSCStatValue>{goals}</PSCStatValue>
        </div>
        <div style={{ marginLeft: "40px" }}>
          <PSCStatName>ASSISTS</PSCStatName>
          <PSCStatValue>{assists}</PSCStatValue>
        </div>
        <div style={{ marginLeft: "40px" }}>
          <PSCStatName>SAVES</PSCStatName>
          <PSCStatValue>{saves}</PSCStatValue>
        </div>
        <div style={{ marginLeft: "40px" }}>
          <PSCStatName>SHOTS</PSCStatName>
          <PSCStatValue>{shots}</PSCStatValue>
        </div>
      </PSCStatWrapper>
    </PlayerStatCardWrapper>
  );
};
