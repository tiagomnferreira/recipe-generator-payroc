import Text from "../../atoms/Text";
import { Props } from "./types";
import { getAllIngredientsFromMeal } from "./utils";

const RecipeIngredientsList = ({ meal }: Props) => {
  const ingredients = getAllIngredientsFromMeal(meal);

  return (
    <ul>
      {ingredients.map((item) => (
        <li key={item}>
          <Text capitalize>{item}</Text>
        </li>
      ))}
    </ul>
  );
};

export default RecipeIngredientsList;
