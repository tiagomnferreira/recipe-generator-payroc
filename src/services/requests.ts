import axios from "axios";
import {
  Area,
  Category,
  FilterType,
  Ingredient,
  Meal,
  Response,
} from "../typescript";
import { BASE_URL, PARAMS, PATH } from "./urlPaths";

const baseRequest = <T>(appendUrl: string) =>
  axios.get<Response<T>>(BASE_URL + appendUrl);

export const getAllIngredients = () =>
  baseRequest<Ingredient>(PATH.LISTING + PARAMS.ALL_INGREDIENTS);

export const getAllCategories = () =>
  baseRequest<Category>(PATH.LISTING + PARAMS.ALL_CATEGORIES);

export const getAllAreas = () =>
  baseRequest<Area>(PATH.LISTING + PARAMS.ALL_AREAS);

export const getMealsByFirstLetter = (letter: string) =>
  baseRequest<Meal>(PATH.SEARCH + PARAMS.SEARCH_BY_LETTER + letter);

export const getMealByName = (name: string) =>
  baseRequest<Meal>(PATH.SEARCH + PARAMS.SEARCH_BY_NAME + name);

export const getMealById = (id: string) =>
  baseRequest<Meal>(PATH.LOOKUP + PARAMS.LOOKUP_BY_ID + id);

export const getMealsByType = (type: FilterType, value: string) =>
  baseRequest<Meal>(PATH.FILTER + `?${type}=${value}`);
