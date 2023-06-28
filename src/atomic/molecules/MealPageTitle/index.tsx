import { memo } from "react";
import Title from "../../atoms/Title";
import { Container } from "./styled-components";
import { Props } from "./types";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";
import { Link } from "react-router-dom";
import { PATHS } from "../../../routes/paths";

const MealPageTitle = ({ meal }: Props) => (
  <Container>
    <Link to={PATHS.BASE}>
      <Icon name="backArrow" />
    </Link>
    <Title>{meal.strMeal}</Title>
    <Text fontSize={16}>
      {meal.strArea} {meal.strCategory}
    </Text>
  </Container>
);

export default memo(MealPageTitle);
