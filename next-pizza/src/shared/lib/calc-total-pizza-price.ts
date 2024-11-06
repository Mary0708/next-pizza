import { Ingredient, ProductItem } from "@prisma/client";
import { PizzaSizes, PizzaTypes } from "../const/pizza";

/**
 *
 * @param type
 * @param size
 * @param items
 * @param ingredients
 * @param selectedIngredients
 * @returns
 */

export function calcTotalPizzaPrice(
  type: PizzaTypes,
  size: PizzaSizes,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) {
  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)
      ?.price || 0;

  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return pizzaPrice + totalIngredientsPrice;
}
