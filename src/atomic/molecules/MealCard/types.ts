import { Meal, MealValue, NullaryFn, UnaryFn } from "../../../typescript";

export interface Props {
  meal: Meal;
  onClick: UnaryFn<MealValue, void>;
}
