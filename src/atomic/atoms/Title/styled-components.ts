import { styled } from "styled-components";
import { Props } from "./types";
import { COLOR } from "../../../style/palette";

export const Container = styled.h1<
  Pick<Props, "fontSize" | "fontColor" | "underline">
>`
  margin: 0;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "")};
  color: ${({ fontColor }) => fontColor};
  border-bottom: ${({ underline }) =>
    underline ? `1px solid ${COLOR.NEUTRAL}` : ""};
  padding-bottom: ${({ underline }) => (underline ? "4px" : "0")};
`;
