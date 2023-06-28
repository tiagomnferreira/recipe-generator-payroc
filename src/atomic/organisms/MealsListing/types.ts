import { Meal, UnaryFn } from "../../../typescript";

export interface Props {
  meals: Meal[];
  onMealClick: UnaryFn<string, void>;
}
