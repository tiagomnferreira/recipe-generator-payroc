import axios from "axios";
import { IngredientsList } from "../typescript";

const BASE_URL = "https://themealdb.com/api/json/v1/1";

const baseRequest = (suffixUrl: string) =>
  axios.get<IngredientsList>(BASE_URL + suffixUrl);

export const getAllIngredients = () => baseRequest("/list.php?i=list");
