import { PropsWithChildren, memo } from "react";
import { Container } from "./styled-components";
import { Props } from "./types";
import { COLOR } from "../../../style/palette";

const Text = ({
  children,
  fontColor = COLOR.TEXT,
  fontSize = 14,
  italic = false,
  capitalize = false,
  ...props
}: PropsWithChildren<Props>) => (
  <Container
    fontColor={fontColor}
    fontSize={fontSize}
    italic={italic}
    capitalize={capitalize}
    {...props}
  >
    {children}
  </Container>
);

export default memo(Text);
