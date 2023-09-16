import HC_UMN_WINNER from "../../assets/hype-chamber/RLCS-winner.mp4";
import { HCWinnerVideo } from "./HCWinner.style";

interface HCWinnerProps {
  show: boolean;
}

export const HCWinner = (props: HCWinnerProps) => {
  const { show } = props;
  return (
    <>
      {show && (
        <HCWinnerVideo
          width="1920"
          height="1080"
          muted={true}
          id="hc-winner"
          autoPlay={true}
          onEnded={(event: React.SyntheticEvent<HTMLVideoElement>) => {
            event.currentTarget.style.display = "none";
          }}
        >
          <source src={HC_UMN_WINNER} type="video/mp4" />
        </HCWinnerVideo>
      )}
    </>
  );
};
