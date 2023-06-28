import { memo } from "react";
import { Container } from "./styled-components";
import { Props } from "./types";

const Thumbnail = ({ src }: Props) => (
  <Container src={src} role="img" aria-label="Meal thumbnail" />
);

export default memo(Thumbnail);
