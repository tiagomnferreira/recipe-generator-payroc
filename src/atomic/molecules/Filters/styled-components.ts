import { css, styled } from "styled-components";
import { COLOR } from "../../../style/palette";
import { generateBoxShadow } from "../../../style/utils";

export const Container = styled.section`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  box-shadow: ${generateBoxShadow({ blur: 10 })};
`;

const bar = css`
  background-color: ${COLOR.PRIMARY};
`;

export const Header = styled.div`
  height: 40px;
  border-bottom: 1px solid ${COLOR.NEUTRAL};
  ${bar};
`;

export const Footer = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${COLOR.NEUTRAL};
  ${bar};
`;

export const List = styled.div`
  flex: 1;
`;
