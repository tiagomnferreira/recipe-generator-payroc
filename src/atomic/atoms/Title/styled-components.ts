import { styled } from "styled-components";
import { Props } from "./types";

export const Container = styled.h1<Pick<Props, "fontSize" | "fontColor">>`
  margin: 0;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "")};
  color: ${({ fontColor }) => fontColor};
`;
