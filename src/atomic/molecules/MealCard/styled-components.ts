import { styled } from "styled-components";
import Card from "../../atoms/Card";
import Text from "../../atoms/Text";
import { COLOR } from "../../../style/palette";

export const Container = styled(Card)`
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
  position: relative;

  &:hover {
    cursor: pointer;
    opacity: 1;
    transform: translateY(-4px);

    > p {
      height: 20px;
      padding: 4px;
      overflow: initial;
    }
  }
`;

export const MealName = styled(Text)`
  transition: all 0.2s ease-in-out;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: auto;
  text-align: center;
  background-color: ${COLOR.BACKGROUND};
  height: 0;
  padding: 0;
  overflow: hidden;
`;
