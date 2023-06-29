export interface Ingredient {
  idIngredient: string;
  strDescription: string | null;
  strIngredient: string;
  strType: null;
}

export interface Response<T> {
  meals: T[] | null;
}

export interface Category {
  strCategory: MealValue;
}

export interface Area {
  strArea: MealValue;
}

export type MealValue = string | null;

export interface Meal extends Category, Area {
  dateModified: MealValue;
  idMeal: MealValue;
  strCreativeCommonsConfirmed: MealValue;
  strDrinkAlternate: MealValue;
  strImageSource: MealValue;
  strIngredient1: MealValue;
  strIngredient2: MealValue;
  strIngredient3: MealValue;
  strIngredient4: MealValue;
  strIngredient5: MealValue;
  strIngredient6: MealValue;
  strIngredient7: MealValue;
  strIngredient8: MealValue;
  strIngredient9: MealValue;
  strIngredient10: MealValue;
  strIngredient11: MealValue;
  strIngredient12: MealValue;
  strIngredient13: MealValue;
  strIngredient14: MealValue;
  strIngredient15: MealValue;
  strIngredient16: MealValue;
  strIngredient17: MealValue;
  strIngredient18: MealValue;
  strIngredient19: MealValue;
  strIngredient20: MealValue;
  strInstructions: MealValue;
  strMeal: MealValue;
  strMealThumb: MealValue;
  strMeasure1: MealValue;
  strMeasure2: MealValue;
  strMeasure3: MealValue;
  strMeasure4: MealValue;
  strMeasure5: MealValue;
  strMeasure6: MealValue;
  strMeasure7: MealValue;
  strMeasure8: MealValue;
  strMeasure9: MealValue;
  strMeasure10: MealValue;
  strMeasure11: MealValue;
  strMeasure12: MealValue;
  strMeasure13: MealValue;
  strMeasure14: MealValue;
  strMeasure15: MealValue;
  strMeasure16: MealValue;
  strMeasure17: MealValue;
  strMeasure18: MealValue;
  strMeasure19: MealValue;
  strMeasure20: MealValue;
  strSource: MealValue;
  strTags: MealValue;
  strYoutube: MealValue;
}

export type FilterType = "c" | "i" | "a";
