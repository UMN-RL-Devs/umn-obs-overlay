import {
  SBLeftTeamImage,
  SBLeftTeamSecondary,
  SBLeftTeamText,
  SBLeftTeamTrapezoid,
  SBRightTeamImage,
  SBRightTeamSecondary,
  SBRightTeamText,
  SBRightTeamTrapezoid,
} from "./SBTeam.style";

interface SBTeamProps {
  isLeft: boolean;
  primary: string;
  secondary: string;
  imageUrl: string;
  score: number;
}

export const SBTeam = (props: SBTeamProps) => {
  const { isLeft, primary, secondary, imageUrl, score } = props;
  return (
    <>
      {isLeft && (
        <>
          <SBLeftTeamSecondary $secondary={secondary} />
          <SBLeftTeamTrapezoid $primary={primary} />
          <SBLeftTeamText>{score}</SBLeftTeamText>
          <SBLeftTeamImage src={imageUrl} />
        </>
      )}
      {!isLeft && (
        <>
          <SBRightTeamSecondary $secondary={secondary} />
          <SBRightTeamTrapezoid $primary={primary} />
          <SBRightTeamText>{score}</SBRightTeamText>
          <SBRightTeamImage src={imageUrl} />
        </>
      )}
    </>
  );
};
