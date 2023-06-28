import { styled } from "styled-components";
import Card from "../../atoms/Card";

export const Container = styled(Card)`
  transition: all 0.2s ease-in-out;
  opacity: 0.8;

  &:hover {
    cursor: pointer;
    opacity: 1;
    transform: translateY(-4px);
  }
`;
