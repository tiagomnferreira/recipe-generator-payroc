import axios from "axios";
import { Ingredient, Meal, Response } from "../typescript";

const BASE_URL = "https://themealdb.com/api/json/v1/1";

const baseRequest = <T>(suffixUrl: string) =>
  axios.get<Response<T>>(BASE_URL + suffixUrl);

export const getAllIngredients = () =>
  baseRequest<Ingredient>("/list.php?i=list");

export const getMealsByFirstLetter = (letter: string) =>
  baseRequest<Meal>(`/search.php?f=${letter}`);

export const getMealById = (id: string) =>
  baseRequest<Meal>(`/lookup.php?i=${id}`);
