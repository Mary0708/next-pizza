import { ProductItem } from "@prisma/client";
import { pizzaSizes, PizzaTypes } from "../const/pizza";
import { Variant } from "../components/shared/group-variants";

export function getAvailablePizzaSizes(
  type: PizzaTypes,
  items: ProductItem[]
): Variant[] {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);

  const availablePizzaSizes = pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some(
      (pizza) => Number(pizza.size) === Number(item.value)
    ),
  }));

  return availablePizzaSizes;
}
