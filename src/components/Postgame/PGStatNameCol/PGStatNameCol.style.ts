import { styled } from "styled-components";
import Sizing from "../../../constants/sizing.json";

export const PGStatNameColWrapper = styled.div`
  position: absolute;
  left: 940px;
  top: 350px;
  height: 600px;
  width: 40px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const PGStatNameColText = styled.p`
  border-bottom: 6px solid grey;
  font-size: ${Sizing.Postgame.statNames.fontSize}px;
  font-weight: 600;
  margin: 0;
  text-align: center;
`;
