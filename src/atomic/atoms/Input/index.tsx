import { HTMLAttributes } from "react";
import { Container, InputWrapper } from "./styled-components";

const Input = (props: HTMLAttributes<HTMLInputElement>) => (
  <Container>
    <InputWrapper {...props} />
  </Container>
);

export default Input;
