import { memo } from "react";
import { Props } from "./types";
import MealCard from "../../molecules/MealCard";
import { Container } from "./styled-components";
import { useNavigate } from "react-router-dom";
import { onMealClick } from "./utilts";

const MealsListing = ({ meals }: Props) => {
  const navigate = useNavigate();

  return (
    <Container>
      {meals.map((item) => (
        <MealCard meal={item} onClick={onMealClick(navigate)} />
      ))}
    </Container>
  );
};

export default memo(MealsListing);
