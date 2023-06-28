import { memo } from "react";
import Title from "../../atoms/Title";
import { Container } from "./styled-components";
import { COLOR } from "../../../style/palette";
import Logo from "../../atoms/Logo";

const Header = () => (
  <Container>
    <Title fontColor={COLOR.BACKGROUND}>Recipe Generator</Title>
    <Logo />
  </Container>
);

export default memo(Header);
