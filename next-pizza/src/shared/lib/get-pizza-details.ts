import { Ingredient, ProductItem } from "@prisma/client";
import { calcTotalPizzaPrice } from "./calc-total-pizza-price";
import { PizzaTypes, PizzaSizes, mapPizzaTypes } from "../const/pizza";

export const getPizzaDetails = (
  type: PizzaTypes,
  size: PizzaSizes,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const totalPrice = calcTotalPizzaPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );

  const textDetails = `${size} см, ${mapPizzaTypes[type]} пицца`;

  return { textDetails, totalPrice };
};
