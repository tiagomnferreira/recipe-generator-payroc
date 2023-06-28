import { css, styled } from "styled-components";
import { COLOR } from "../../../style/palette";
import { generateBoxShadow } from "../../../style/utils";
import { ContainerProps } from "./types";
import Icon from "../../atoms/Icon";

export const Container = styled.section`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: ${generateBoxShadow({ blur: 10 })};
  position: absolute;
  bottom: 0;
  width: 300px;
  background-color: ${COLOR.BACKGROUND};
  z-index: 1;
`;

export const Bar = styled.div`
  background-color: ${COLOR.PRIMARY};
  height: 40px;
  cursor: pointer;
  text-align: center;
  color: ${COLOR.BACKGROUND};
  font-weight: 600;
`;

export const List = styled.div<ContainerProps>`
  height: ${({ isOpen }) => (isOpen ? "500px" : "0px")};
  padding: ${({ isOpen }) => (isOpen ? "12px" : "0px")};
  transition: all 0.5s ease-in-out;
  border-top: 1px solid ${COLOR.NEUTRAL};
  border-bottom: 1px solid ${COLOR.NEUTRAL};
  position: relative;
`;

export const Lock = styled(Icon)`
  position: absolute;
  top: -20px;
  margin: auto;
  left: 130px;
  background-color: ${COLOR.ACCENT};
  border-radius: 20px;
`;
