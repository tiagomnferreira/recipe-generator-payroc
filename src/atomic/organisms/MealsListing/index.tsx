import { memo } from "react";
import { Props } from "./types";
import MealCard from "../../molecules/MealCard";
import { Container } from "./styled-components";

const MealsListing = ({ meals, onMealClick }: Props) => (
  <Container>
    {meals.map((item) => (
      <MealCard meal={item} onClick={() => onMealClick(item.idMeal)} />
    ))}
  </Container>
);

export default memo(MealsListing);
