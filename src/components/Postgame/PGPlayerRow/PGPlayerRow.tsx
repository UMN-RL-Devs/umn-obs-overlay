import { PGPlayerRowText, PGPlayerRowWrapper } from "./PGPlayerRow.style";

interface PGPlayerRowProps {
  playerNames: string[];
  isLeft: boolean;
}

// Render separately for each team
export const PGPlayerRow = (props: PGPlayerRowProps) => {
  const { playerNames, isLeft } = props;
  return (
    <PGPlayerRowWrapper $isLeft={isLeft}>
      {playerNames.map((playerName) => (
        <PGPlayerRowText>{playerName}</PGPlayerRowText>
      ))}
    </PGPlayerRowWrapper>
  );
};
