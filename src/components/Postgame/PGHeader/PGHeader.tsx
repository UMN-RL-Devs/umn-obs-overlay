import { SBSeries } from "../../Scorebug/SBSeries/SBSeries";
import {
  PGHeaderImage,
  PGHeaderMainWrapper,
  PGHeaderScore,
} from "./PGHeader.style";

interface PGHeaderProps {
  blueLogo: string;
  blueGameScore: number;
  blueSeriesScore: number;
  blueSecondary: string;
  orangeLogo: string;
  orangeGameScore: number;
  orangeSeriesScore: number;
  orangeSecondary: string;
  seriesLength: number;
}

export const PGHeader = (props: PGHeaderProps) => {
  const {
    blueLogo,
    blueGameScore,
    blueSeriesScore,
    blueSecondary,
    orangeLogo,
    orangeGameScore,
    orangeSeriesScore,
    orangeSecondary,
    seriesLength,
  } = props;
  return (
    <>
      <PGHeaderMainWrapper>
        <PGHeaderImage src={blueLogo} />
        <PGHeaderScore>
          {blueGameScore} - {orangeGameScore}
        </PGHeaderScore>
        <PGHeaderImage src={orangeLogo} />
      </PGHeaderMainWrapper>
      <SBSeries
        series={seriesLength}
        secondary={blueSecondary}
        isLeft={true}
        wins={blueSeriesScore}
        topOffset={110}
        leftOffset={835}
      />
      <SBSeries
        series={seriesLength}
        secondary={orangeSecondary}
        isLeft={false}
        wins={orangeSeriesScore}
        topOffset={110}
        leftOffset={1065}
      />
    </>
  );
};
