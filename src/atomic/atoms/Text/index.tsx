import { PropsWithChildren, memo } from "react";
import { Container } from "./styled-components";
import { Props } from "./types";
import { COLOR } from "../../../style/palette";

const Text = ({
  children,
  fontColor = COLOR.TEXT,
  fontSize = 12,
}: PropsWithChildren<Props>) => (
  <Container fontColor={fontColor} fontSize={fontSize}>
    {children}
  </Container>
);

export default memo(Text);
