import {
  SBLeftTeamImage,
  SBLeftTeamText,
  SBLeftTeamTrapezoid,
  SBRightTeamImage,
  SBRightTeamText,
  SBRightTeamTrapezoid,
} from "./SBTeam.style";

interface SBTeamProps {
  isLeft: boolean;
  primary: string;
  // secondary: string;
  imageUrl: string;
  score: number;
}

export const SBTeam = (props: SBTeamProps) => {
  const { isLeft, primary, imageUrl, score } = props;
  return (
    <>
      {isLeft && (
        <>
          <SBLeftTeamTrapezoid $primary={primary} />
          <SBLeftTeamText>{score}</SBLeftTeamText>
          <SBLeftTeamImage src={imageUrl} />
        </>
      )}
      {!isLeft && (
        <>
          <SBRightTeamTrapezoid $primary={primary} />
          <SBRightTeamText>{score}</SBRightTeamText>
          <SBRightTeamImage src={imageUrl} />
        </>
      )}
    </>
  );
};
