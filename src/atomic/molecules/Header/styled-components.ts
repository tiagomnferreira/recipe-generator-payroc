import styled from "styled-components";
import { COLOR } from "../../../style/palette";

export const Container = styled.header`
  background-color: ${COLOR.PRIMARY};
  height: 80px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 75%;
  }
`;
