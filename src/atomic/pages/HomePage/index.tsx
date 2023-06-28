import { memo, useEffect, useState } from "react";
import IngredientsListing from "../../components/IngredientsListing";
import { Container } from "./styled-components";
import Sidebar from "../../organisms/Sidebar";
import { Ingredient } from "../../../typescript";
import { getAllIngredients } from "../../../services";

const HomePage = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    getAllIngredients().then(({ data }) => {
      setIngredients(data.meals);
    });
  }, []);

  return (
    <Container>
      <Sidebar />
      <IngredientsListing />
    </Container>
  );
};

export default memo(HomePage);
