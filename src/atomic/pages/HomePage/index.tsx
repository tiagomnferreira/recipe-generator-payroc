import { memo, useEffect, useState } from "react";
import { Container } from "./styled-components";
import Filters from "../../components/Filters";
import MealsListing from "../../organisms/MealsListing";
import { getMealsByFirstLetter } from "../../../services";
import { Meal } from "../../../typescript";
import { useNavigate } from "react-router-dom";
import { onMealClick } from "./utilts";

const HomePage = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMealsByFirstLetter("a").then(({ data }) => {
      setMeals(data.meals);
    });
  }, []);

  return (
    <Container>
      <Filters ingredients={[]} />
      <MealsListing meals={meals} onMealClick={onMealClick(navigate)} />
    </Container>
  );
};

export default memo(HomePage);
