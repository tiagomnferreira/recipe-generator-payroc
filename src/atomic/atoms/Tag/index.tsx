import { memo } from "react";
import { Container } from "./styled-components";
import { Props } from "./types";

const Tag = ({ label }: Props) => <Container>{label}</Container>;

export default memo(Tag);
