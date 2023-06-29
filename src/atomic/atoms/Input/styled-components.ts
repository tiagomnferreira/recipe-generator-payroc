import { styled } from "styled-components";
import { COLOR } from "../../../style/palette";

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 40px;
  border: 1px solid ${COLOR.NEUTRAL};
  border-radius: 4px;
  padding: 4px 12px;
  box-sizing: border-box;
`;

export const InputWrapper = styled.input`
  border: none;
  box-sizing: border-box;
  outline: none;
  background: none;
  padding: 0;
  margin: 0;
  appearance: none;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  width: 100%;
  height: 100%;
`;
