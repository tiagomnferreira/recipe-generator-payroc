import { memo } from "react";
import { useLoaderData } from "react-router-dom";
import { Meal } from "../../../typescript";
import MealPageTitle from "../../molecules/MealPageTitle";
import MealPageTags from "../../molecules/MealPageTags";
import Text from "../../atoms/Text";
import RecipeIngredientsList from "../../components/RecipeIngredientsListing";
import { Container, Image, Link, Row } from "./styled-components";
import Icon from "../../atoms/Icon";

const MealPage = () => {
  const meal = useLoaderData() as Meal;

  console.log(meal);

  return (
    <Container>
      <MealPageTitle meal={meal} />
      <Row>
        {meal.strMealThumb && <Image src={meal.strMealThumb} />}
        <div>
          <Text fontSize={20}>Ingredients:</Text>
          <RecipeIngredientsList meal={meal} />
          <MealPageTags meal={meal} />
        </div>
      </Row>
      <section>
        <Text fontSize={20}>Instructions:</Text>
        <Text>{meal.strInstructions}</Text>
      </section>
      <Row>
        {meal.strSource && (
          <a href={meal.strSource} target="_blank" rel="noopener noreferrer">
            <Link name="link" />
          </a>
        )}
        {meal.strYoutube && (
          <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
            <Link name="youtube" />
          </a>
        )}
      </Row>
    </Container>
  );
};

export default memo(MealPage);
