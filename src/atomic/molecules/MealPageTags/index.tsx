import { memo } from "react";
import Tag from "../../atoms/Tag";
import { Container } from "./styled-components";
import { Props } from "./types";

const MealPageTags = ({ meal }: Props) =>
  meal.strTags ? (
    <Container>
      {meal.strTags.split(",").map((tag) => (
        <Tag label={tag} />
      ))}
    </Container>
  ) : null;

export default memo(MealPageTags);
