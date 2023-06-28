import { memo, useEffect, useState } from "react";
import { Container } from "./styled-components";
import Filters from "../../components/Filters";
import MealsListing from "../../components/MealsListing";
import { getMealsByFirstLetter } from "../../../services";
import { Meal } from "../../../typescript";
import { useNavigate } from "react-router-dom";

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
      <Filters />
      <MealsListing meals={meals} />
    </Container>
  );
};

export default memo(HomePage);
