import { styled } from "styled-components";
import { COLOR } from "../../../style/palette";

export const Container = styled.button`
  width: 150px;
  height: 40px;
  background-color: ${COLOR.ACCENT};
  box-shadow: none;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid ${COLOR.SECONDARY};
  }

  &:active {
    transform: translateY(1px);
  }
`;
