import { memo, useEffect, useState } from "react";
import { Container } from "./styled-components";
import Filters from "../../components/Filters";
import MealsListing from "../../components/MealsListing";
import { getMealsByFirstLetter } from "../../../services";
import { Meal } from "../../../typescript";

const HomePage = () => {
  const [meals, setMeals] = useState<Meal[]>([]);

  const getInitialMeals = () =>
    getMealsByFirstLetter("a").then(({ data }) => {
      setMeals(data.meals);
    });

  useEffect(() => {
    getInitialMeals();
  }, []);

  return (
    <Container>
      <Filters setMeals={setMeals} getInitialMeals={getInitialMeals} />
      <MealsListing meals={meals} />
    </Container>
  );
};

export default memo(HomePage);
