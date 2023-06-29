import { Meal, NullaryFn, SetState } from "../../../typescript";

export interface Props {
  setMeals: SetState<Meal[]>;
  getInitialMeals: NullaryFn<void>;
}

export interface ContainerProps {
  isOpen: boolean;
}
