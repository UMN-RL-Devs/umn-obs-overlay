import { styled } from "styled-components";
import RLMaroon from "./rl_maroon.png";

export const PostgameWrapper = styled.div`
  font-family: bahnschrift;
  color: white;
  text-align: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${RLMaroon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 1080px;
  width: 1920px;
`;
