import { HtmlHTMLAttributes, PropsWithChildren } from "react";
import { Container } from "./styled-components";

const Card = ({
  children,
  ...props
}: PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>>) => (
  <Container {...props}>{children}</Container>
);

export default Card;
