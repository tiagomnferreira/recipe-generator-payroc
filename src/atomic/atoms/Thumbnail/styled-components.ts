import { styled } from "styled-components";
import { Props } from "./types";

export const Container = styled.div<Props>`
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
`;
