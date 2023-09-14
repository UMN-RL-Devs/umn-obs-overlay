import { PGStatNameColText, PGStatNameColWrapper } from "./PGStatNameCol.style";

export const PGStatNameCol = () => {
  return (
    <PGStatNameColWrapper>
      <PGStatNameColText>SCORE</PGStatNameColText>
      <PGStatNameColText>GOALS</PGStatNameColText>
      <PGStatNameColText>ASSISTS</PGStatNameColText>
      <PGStatNameColText>SHOTS</PGStatNameColText>
      <PGStatNameColText>SAVES</PGStatNameColText>
      <PGStatNameColText>DEMOS</PGStatNameColText>
    </PGStatNameColWrapper>
  );
};
