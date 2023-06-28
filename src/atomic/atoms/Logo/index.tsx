import { Container } from "./styled-components";
import logoSrc from "../../../assets/recipe-logo.png";
import { memo } from "react";

const Logo = () => <Container src={logoSrc} alt="Recipe Generator Logo" />;

export default memo(Logo);
