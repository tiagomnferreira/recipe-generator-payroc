import { styled } from "styled-components";
import { COLOR } from "../../../style/palette";

export const Container = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
`;
