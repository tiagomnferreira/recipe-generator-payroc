import { memo } from "react";
import Title from "../../atoms/Title";
import { Container } from "./styled-components";
import { COLOR } from "../../../style/palette";

const Header = () => (
  <Container>
    <Title fontColor={COLOR.BACKGROUND}>Recipe Generator</Title>
  </Container>
);

export default memo(Header);