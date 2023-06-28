import { Meal, NullaryFn } from "../../../typescript";

export interface Props {
  meal: Meal;
  onClick: NullaryFn<void>;
}
