import { styled } from "styled-components";
import Icon from "../../atoms/Icon";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Row = styled.section`
  display: flex;
`;

export const Image = styled.img`
  max-width: 300px;
  border-radius: 12px;
  margin-right: 16px;
`;

export const Link = styled(Icon)`
  cursor: pointer;
`;
