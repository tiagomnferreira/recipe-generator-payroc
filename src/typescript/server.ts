export interface Ingredient {
  idIngredient: string;
  strDescription: string | null;
  strIngredient: string;
  strType: null;
}

export interface Response<T> {
  meals: T[];
}

export interface Meal {
  dateModified: null | string;
  idMeal: string;
  strArea: string;
  strCategory: string;
  strCreativeCommonsConfirmed: null | string;
  strDrinkAlternate: null | string;
  strImageSource: null | string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: null | string;
  strIngredient17: null | string;
  strIngredient18: null | string;
  strIngredient19: null | string;
  strIngredient20: null | string;
  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: null | string;
  strMeasure17: null | string;
  strMeasure18: null | string;
  strMeasure19: null | string;
  strMeasure20: null | string;
  strSource: null | string;
  strTags: string;
  strYoutube: string;
}
