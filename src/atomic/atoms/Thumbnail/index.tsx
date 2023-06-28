import { memo } from "react";
import { Container } from "./styled-components";
import { Props } from "./types";

const Thumbnail = ({ src, ...props }: Props) => (
  <Container src={src} role="img" aria-label="Meal thumbnail" {...props} />
);

export default memo(Thumbnail);
