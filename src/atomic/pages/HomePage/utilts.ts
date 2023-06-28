import { NavigateFunction } from "react-router-dom";
import { PATHS } from "../../../routes/paths";

export const onMealClick = (navigate: NavigateFunction) => (id: string) =>
  navigate(PATHS.MEAL + "/" + id);
