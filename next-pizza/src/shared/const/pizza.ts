export const mapPizzaSize = {
  20: "Маленькая",
  30: "Средняя",
  40: "Большая",
} as const;

export const mapPizzaTypes = {
  1: "Тонкое",
  2: "Традиционное",
} as const;

export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
  name,
  value,
}));

export const pizzaTypes = Object.entries(mapPizzaTypes).map(
  ([value, name]) => ({
    name,
    value,
  })
);

export type PizzaSizes = keyof typeof mapPizzaSize;
export type PizzaTypes = keyof typeof mapPizzaTypes;
