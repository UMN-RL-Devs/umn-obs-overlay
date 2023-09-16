import { Player } from "../../models/GameContext/Player";
import { PGBlueCol } from "./PGBlueCol/PGBlueCol";
import { PGHeader } from "./PGHeader/PGHeader";
import { PGOrangeCol } from "./PGOrangeCol/PGOrangeCol";
import { PGStatNameCol } from "./PGStatNameCol/PGStatNameCol";
import { PostgameWrapper } from "./Postgame.style";

interface PostgameProps {
  blueTeam: Player[];
  orangeTeam: Player[];
  blueLogo: string;
  blueGameScore: number;
  blueSeriesScore: number;
  blueSecondary: string;
  orangeLogo: string;
  orangeGameScore: number;
  orangeSeriesScore: number;
  orangeSecondary: string;
  seriesLength: number;
  show: boolean;
}

export const Postgame = (props: PostgameProps) => {
  const {
    blueTeam,
    orangeTeam,
    blueLogo,
    blueGameScore,
    blueSeriesScore,
    blueSecondary,
    orangeLogo,
    orangeGameScore,
    orangeSeriesScore,
    orangeSecondary,
    seriesLength,
    show,
  } = props;
  return (
    <>
      {show && (
        <PostgameWrapper>
          <PGHeader
            blueLogo={blueLogo}
            blueGameScore={blueGameScore}
            blueSeriesScore={blueSeriesScore}
            blueSecondary={blueSecondary}
            orangeLogo={orangeLogo}
            orangeGameScore={orangeGameScore}
            orangeSeriesScore={orangeSeriesScore}
            orangeSecondary={orangeSecondary}
            seriesLength={seriesLength}
          />
          <PGBlueCol players={blueTeam} />
          <PGStatNameCol />
          <PGOrangeCol players={orangeTeam} />
        </PostgameWrapper>
      )}
    </>
  );
};
