import { styled } from "styled-components";
import Icon from "../../atoms/Icon";
import Text from "../../atoms/Text";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
`;

export const Row = styled.section`
  display: flex;
`;

export const Image = styled.img`
  max-width: 300px;
  border-radius: 12px;
  margin-right: 16px;
  height: fit-content;
`;

export const Link = styled(Icon)`
  cursor: pointer;
`;

export const Instructions = styled.section`
  gap: 4px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const ScrollingText = styled(Text)`
  overflow: auto;
  white-space: break-spaces;
`;
