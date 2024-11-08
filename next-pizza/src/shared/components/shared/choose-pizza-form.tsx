import { cn } from "@/shared/lib/utils";
import { Ingredient, ProductItem } from "@prisma/client";
import React from "react";
import { PizzaImage } from "./pizza-image";
import { Title } from "./title";
import { Button } from "../ui/button";
import { GroupVariants } from "./group-variants";
import { PizzaSizes, pizzaTypes, PizzaTypes } from "@/shared/const/pizza";
import { IngredientItem } from "./ingredient-item";
import { usePizzaOptions } from "@/shared/lib/use-pizza-options";
import { getPizzaDetails } from "@/shared/lib/get-pizza-details";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  loading?: boolean;
  onClickAddCart?: VoidFunction;
  className?: string;
}

export function ChoosePizzaForm({
  imageUrl,
  name,
  ingredients,
  items,
  loading,
  onClickAddCart,
  className,
}: Props): JSX.Element {
  const {
    size,
    type,
    selectedIngredients,
    availableSizes,
    setSize,
    setType,
    addIngredients,
  } = usePizzaOptions(items);

  const { textDetails, totalPrice } = getPizzaDetails(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );

  const handleClickAdd = () => {
    onClickAddCart?.();
  };

  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#FCFCFC] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <div className="flex flex-col gap-5 mt-5">
          <GroupVariants
            items={availableSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSizes)}
          />

          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaTypes)}
          />
        </div>

        <div className="bd-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => addIngredients(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
}
