export interface Ingredient {
  idIngredient: string;
  strDescription: string | null;
  strIngredient: string;
  strType: null;
}

export interface IngredientsList {
  meals: Ingredient[];
}
