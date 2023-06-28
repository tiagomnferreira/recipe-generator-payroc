import { styled } from "styled-components";
import { Props } from "./types";

export const Container = styled.p<Props>`
  margin: 0;
  color: ${({ fontColor }) => fontColor};
  font-size: ${({ fontSize }) => fontSize}px;
  font-style: ${({ italic }) => (italic ? "italic" : "")};
`;
