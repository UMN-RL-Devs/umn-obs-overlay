import { SBClock } from "./SBClock/SBClock";
import { SBSeries } from "./SBSeries/SBSeries";
import { SBTeam } from "./SBTeam/SBTeam";

interface ScorebugProps {
  clock: string;
  seriesLength: number;
  blueTeamPrimary: string;
  blueTeamSecondary: string;
  blueTeamImage: string;
  blueTeamScore: number;
  blueTeamWins: number;
  orangeTeamPrimary: string;
  orangeTeamSecondary: string;
  orangeTeamImage: string;
  orangeTeamScore: number;
  orangeTeamWins: number;
}

export const Scorebug = (props: ScorebugProps) => {
  const {
    clock,
    seriesLength,
    blueTeamPrimary,
    blueTeamSecondary,
    blueTeamScore,
    blueTeamImage,
    blueTeamWins,
    orangeTeamPrimary,
    orangeTeamSecondary,
    orangeTeamScore,
    orangeTeamImage,
    orangeTeamWins,
  } = props;
  return (
    <>
      <SBClock clock={clock} />
      <SBTeam
        isLeft={true}
        primary={blueTeamPrimary}
        secondary={blueTeamSecondary}
        score={blueTeamScore}
        imageUrl={blueTeamImage}
      />
      <SBTeam
        isLeft={false}
        primary={orangeTeamPrimary}
        secondary={orangeTeamSecondary}
        score={orangeTeamScore}
        imageUrl={orangeTeamImage}
      />
      <SBSeries
        isLeft={true}
        secondary={blueTeamSecondary}
        series={seriesLength}
        wins={blueTeamWins}
      />
      <SBSeries
        isLeft={false}
        secondary={orangeTeamSecondary}
        series={seriesLength}
        wins={orangeTeamWins}
      />
    </>
  );
};
