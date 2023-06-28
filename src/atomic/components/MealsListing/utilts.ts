import { NavigateFunction } from "react-router-dom";
import { PATHS } from "../../../routes/paths";
import { MealValue } from "../../../typescript";

export const onMealClick = (navigate: NavigateFunction) => (id: MealValue) =>
  navigate(PATHS.MEAL + "/" + id || "");
