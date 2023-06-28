import { get } from "lodash";
import { Meal } from "../../../typescript";

export const getAllIngredientsFromMeal = (meal: Meal) =>
  Object.keys(meal).reduce((acc: string[], key) => {
    if (key.includes("strIngredient")) {
      const position = key.match(/\d+/)?.pop();
      const ingredient = get(meal, `strIngredient${position}`, "");
      const measurements = get(meal, `strMeasure${position}`, "");

      if (position === undefined || ingredient === "" || measurements === "")
        return acc;

      acc.push(`${ingredient} (${measurements})`);
    }

    return acc;
  }, []);
