import { styled } from "styled-components";
import { COLOR } from "../../../style/palette";
import { generateBoxShadow } from "../../../style/utils";
import { ContainerProps } from "./types";
import Icon from "../../atoms/Icon";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";

export const Container = styled.section`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: ${generateBoxShadow({ blur: 10 })};
  position: fixed;
  bottom: 35px;
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

export const FiltersList = styled.div<ContainerProps>`
  height: ${({ isOpen }) => (isOpen ? "500px" : "0px")};
  padding: ${({ isOpen }) => (isOpen ? "30px 12px 12px 12px" : "0px")};
  transition: all 0.5s ease-in-out;
  position: relative;
  overflow: ${({ isOpen }) => (isOpen ? "auto" : "hidden")};
  border: 1px solid ${COLOR.NEUTRAL};
`;

export const Lock = styled(Icon)`
  position: absolute;
  top: 20px;
  margin: auto;
  left: 130px;
  background-color: ${COLOR.ACCENT};
  border-radius: 20px;
  z-index: 1;
`;

export const Group = styled.div``;

export const ClearBtn = styled(Button)`
  margin: 8px auto;
`;

export const Divider = styled.div`
  border-bottom: 1px solid ${COLOR.NEUTRAL};
  width: 100%;
  height: 0px;
  position: relative;
  margin: 16px 0;
`;

export const DividerText = styled(Text)`
  position: absolute;
  margin: auto;
  left: 45%;
  top: -8px;
  background: white;
  padding: 0 4px;
`;
