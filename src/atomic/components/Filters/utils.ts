import { ChangeEvent } from "react";
import {
  Area,
  Category,
  FilterType,
  Ingredient,
  Meal,
  NullaryFn,
  SetState,
} from "../../../typescript";
import { getMealByName, getMealsByType } from "../../../services";
import { get } from "lodash";

export const onChange =
  (setMeals: SetState<Meal[]>, getInitialMeals: NullaryFn<void>) =>
  (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    if (name !== "")
      getMealByName(name).then(({ data }) => {
        setMeals(data?.meals || []);
      });
    else getInitialMeals();
  };

export const filterBy =
  (setMeals: SetState<Meal[]>, setActiveTag: SetState<string | undefined>) =>
  (type: FilterType, value: string) => {
    getMealsByType(type, value).then(({ data }) => {
      setMeals(data?.meals || []);
      setActiveTag(value);
    });
  };

export const parseToLabels = <T extends Area | Category>(vec: T[]): string[] =>
  vec
    .map((item: T) => {
      const key = Object.keys(item).pop();

      return get(item, `${key}`, "") as string;
    })
    .filter(Boolean);

export const parseIngredientsToLabels = (ingredients: Ingredient[]) =>
  ingredients.map((item) => get(item, "strIngredient", "")).filter(Boolean);

export const onSearchIngredient =
  (setIngredientFilter: SetState<string>) =>
  (e: ChangeEvent<HTMLInputElement>) =>
    setIngredientFilter(e.target.value);

export const filterIngredients = (filter: string, ingredients: string[]) =>
  ingredients
    .map((item) =>
      item.toLowerCase().includes(filter.toLowerCase()) ? item : ""
    )
    .filter(Boolean)
    .slice(0, 28);
