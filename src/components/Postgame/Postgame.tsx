import { Player } from "../../models/GameContext/Player";
import { PGPlayerRow } from "./PGPlayerRow/PGPlayerRow";
import { PGStatRow } from "./PGStatRow/PGStatRow";
import { PostgameWrapper } from "./Postgame.style";

interface PostgameProps {
  blueTeam: Player[];
  orangeTeam: Player[];
}

export const Postgame = (props: PostgameProps) => {
  const { blueTeam, orangeTeam } = props;
  return (
    <PostgameWrapper>
      <PGPlayerRow
        playerNames={blueTeam.map((player) => player.name)}
        isLeft={true}
      />
      <PGPlayerRow
        playerNames={orangeTeam.map((player) => player.name)}
        isLeft={false}
      />
      <PGStatRow blueTeam={blueTeam} orangeTeam={orangeTeam} />
    </PostgameWrapper>
  );
};
