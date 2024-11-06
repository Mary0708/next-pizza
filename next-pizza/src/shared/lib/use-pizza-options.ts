import React from "react";
import { Variant } from "../components/shared/group-variants";
import { PizzaSizes, PizzaTypes } from "../const/pizza";
import { useSet } from "react-use";
import { getAvailablePizzaSizes } from "./get-available-pizza-sizes";
import { ProductItem } from "@prisma/client";

interface ReturnProps {
  size: PizzaSizes;
  type: PizzaTypes;
  selectedIngredients: Set<number>;
  availableSizes: Variant[];
  setSize: (size: PizzaSizes) => void;
  setType: (type: PizzaTypes) => void;
  addIngredients: (id: number) => void;
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = React.useState<PizzaSizes>(20);
  const [type, setType] = React.useState<PizzaTypes>(1);
  const [selectedIngredients, { toggle: addIngredients }] = useSet(
    new Set<number>([])
  );

  const availableSizes = getAvailablePizzaSizes(type, items);

  React.useEffect(() => {
    const isAvailableSize = availableSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const availableSize = availableSizes?.find((item) => !item.disabled);

    if (availableSize && !isAvailableSize) {
      setSize(Number(availableSize.value) as PizzaSizes);
    }
  }, [type]);

  return {
    size,
    type,
    selectedIngredients,
    availableSizes,
    setSize,
    setType,
    addIngredients,
  };
};
