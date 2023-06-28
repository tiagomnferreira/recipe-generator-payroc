import { memo } from "react";
import Title from "../../atoms/Title";
import { Container } from "./styled-components";
import { COLOR } from "../../../style/palette";
import Logo from "../../atoms/Logo";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../routes/paths";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title fontColor={COLOR.BACKGROUND} onClick={() => navigate(PATHS.BASE)}>
        Recipe Generator
      </Title>
      <Logo />
    </Container>
  );
};

export default memo(Header);
