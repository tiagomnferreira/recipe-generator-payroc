import { styled } from "styled-components";
import { generateBoxShadow } from "../../../style/utils";

export const Container = styled.div`
  height: 300px;
  width: 300px;
  box-shadow: ${generateBoxShadow({ blur: 10 })};
`;
