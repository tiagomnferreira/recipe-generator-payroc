import { PropsWithChildren, memo } from "react";
import { Container } from "./styled-components";
import { Props } from "./types";
import { COLOR } from "../../../style/palette";

const Title = ({
  fontSize,
  children,
  fontColor = COLOR.TEXT,
}: PropsWithChildren<Props>) => (
  <Container fontSize={fontSize} fontColor={fontColor}>
    {children}
  </Container>
);

export default memo(Title);
