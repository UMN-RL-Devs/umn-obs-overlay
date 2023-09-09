import { SBClockText, SBClockTrapezoid } from "./SBClock.style";

interface SBClockProps {
  clock: string;
}

export const SBClock = (props: SBClockProps) => {
  const { clock } = props;
  return (
    <>
      <SBClockTrapezoid />
      <SBClockText>{clock}</SBClockText>
    </>
  );
};
