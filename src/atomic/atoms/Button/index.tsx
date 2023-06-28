import { PropsWithChildren } from "react";
import { Container } from "./styled-components";
import { Props } from "./types";

const Button = ({ variant, children, ...props }: PropsWithChildren<Props>) => (
  <Container {...props}>{children}</Container>
);

export default Button;
