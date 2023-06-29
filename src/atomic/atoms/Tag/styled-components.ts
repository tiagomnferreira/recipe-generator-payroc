import { css, styled } from "styled-components";
import { COLOR } from "../../../style/palette";
import { Props } from "./types";

const activeTagStyle = css<Pick<Props, "active">>`
  transition: all 0.2s ease-in-out;
  opacity: ${({ active }) => (active ? 1 : 0.7)};

  &:hover {
    opacity: 1;
  }
`;

export const Container = styled.div<Pick<Props, "active">>`
  overflow: hidden;
  white-space: nowrap;
  width: 52px;
  height: 16px;
  background-color: ${COLOR.SECONDARY};
  color: ${COLOR.BACKGROUND};
  border-radius: 4px;
  padding: 4px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;

  p {
    color: inherit;
    font-size: inherit;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  ${({ active }) => {
    if (active !== undefined) return activeTagStyle;
    return undefined;
  }};
`;
