import { SBClock } from "./SBClock/SBClock";
import { SBTeam } from "./SBTeam/SBTeam";

interface ScorebugProps {
  clock: string;
  // seriesLength: number;
  blueTeamPrimary: string;
  // blueTeamSecondary: string;
  blueTeamImage: string;
  blueTeamScore: number;
  orangeTeamPrimary: string;
  // orangeTeamSecondary: string;
  orangeTeamImage: string;
  orangeTeamScore: number;
}

export const Scorebug = (props: ScorebugProps) => {
  const {
    clock,
    blueTeamPrimary,
    blueTeamScore,
    blueTeamImage,
    orangeTeamPrimary,
    orangeTeamScore,
    orangeTeamImage,
  } = props;
  return (
    <>
      <SBClock clock={clock} />
      <SBTeam
        isLeft={true}
        primary={blueTeamPrimary}
        score={blueTeamScore}
        imageUrl={blueTeamImage}
      />
      <SBTeam
        isLeft={false}
        primary={orangeTeamPrimary}
        score={orangeTeamScore}
        imageUrl={orangeTeamImage}
      />
    </>
  );
};
