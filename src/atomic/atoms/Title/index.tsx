import { PropsWithChildren, memo } from "react";
import { Container } from "./styled-components";
import { Props } from "./types";
import { COLOR } from "../../../style/palette";

const Title = ({
  children,
  fontColor = COLOR.TEXT,
  fontSize,
  underline = false,
}: PropsWithChildren<Props>) => (
  <Container fontColor={fontColor} fontSize={fontSize} underline={underline}>
    {children}
  </Container>
);

export default memo(Title);
