import { styled } from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: min-content;
  grid-gap: 20px;
  flex: 1;
  justify-items: center;
`;
