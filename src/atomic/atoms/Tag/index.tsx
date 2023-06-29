import { memo } from "react";
import { Container } from "./styled-components";
import { Props } from "./types";
import Text from "../Text";

const Tag = ({ label, active, ...props }: Props) => (
  <Container active={active} {...props}>
    <Text>{label}</Text>
  </Container>
);

export default memo(Tag);
