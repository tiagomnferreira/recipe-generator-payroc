import { memo } from "react";
import { useLoaderData } from "react-router-dom";
import { Meal } from "../../../typescript";
import MealPageTitle from "../../molecules/MealPageTitle";
import Text from "../../atoms/Text";
import RecipeIngredientsList from "../../components/RecipeIngredientsListing";
import {
  Container,
  Image,
  Instructions,
  Link,
  Row,
  ScrollingText,
} from "./styled-components";
import TagsListing from "../../molecules/TagsListing";

const MealPage = () => {
  const meal = useLoaderData() as Meal;

  const tags = meal.strTags?.split(",");

  return (
    <Container>
      <MealPageTitle meal={meal} />
      <Row>
        {meal.strMealThumb && <Image src={meal.strMealThumb} />}
        <div>
          <Text fontSize={20}>Ingredients:</Text>
          <RecipeIngredientsList meal={meal} />
          {tags && <TagsListing labels={tags} />}
        </div>
      </Row>
      <Instructions>
        <Text fontSize={20}>Instructions:</Text>
        <ScrollingText>{meal.strInstructions}</ScrollingText>
      </Instructions>
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
