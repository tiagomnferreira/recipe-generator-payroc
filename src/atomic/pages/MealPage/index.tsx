import { memo } from "react";
import { useLoaderData } from "react-router-dom";
import Title from "../../atoms/Title";
import { Meal } from "../../../typescript";

const MealPage = () => {
  const meal = useLoaderData() as Meal;

  return (
    <div>
      <Title underline>{meal.strMeal}</Title>
    </div>
  );
};

export default memo(MealPage);
