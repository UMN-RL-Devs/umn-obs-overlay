import { SBSeriesShape } from "./SBSeries.style";

interface SBSeriesProps {
  series: number;
  secondary: string;
  isLeft: boolean;
  wins: number;
}

export const SBSeries = (props: SBSeriesProps) => {
  const { series, secondary, isLeft, wins } = props;
  let requiredWins: number;
  if (series === 3) {
    requiredWins = 2;
  } else if (series === 5) {
    requiredWins = 3;
  } else if (series === 7) {
    requiredWins = 4;
  } else {
    requiredWins = 5;
  }

  return (
    <>
      {[...Array(requiredWins)].map((e, index) => {
        return (
          <SBSeriesShape
            $isLeft={isLeft}
            $index={index}
            $isWon={wins - 1 >= index}
            $color={secondary}
          />
        );
      })}
    </>
  );
};
