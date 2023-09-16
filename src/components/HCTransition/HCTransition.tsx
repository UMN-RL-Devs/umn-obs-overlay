import HC_UMN_TRANSITION from "../../assets/hype-chamber/UMN-RLCS-logo.mp4";
import { HCVideo } from "./HCTransition.style";

interface HCTransitionProps {
  show: boolean;
}

export const HCTransition = (props: HCTransitionProps) => {
  const { show } = props;
  return (
    <>
      {show && (
        <HCVideo
          width="1920"
          height="1080"
          muted={true}
          id="hc-transition"
          autoPlay={true}
          onEnded={(event: React.SyntheticEvent<HTMLVideoElement>) => {
            event.currentTarget.style.display = "none";
          }}
        >
          <source src={HC_UMN_TRANSITION} type="video/mp4" />
        </HCVideo>
      )}
    </>
  );
};
