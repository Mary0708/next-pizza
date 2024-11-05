"use client";

import React, { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { Title } from "./title";
import { cn } from "@/shared/lib/utils";
import { ProductCard } from "./product-card";
import { useCategoryStore } from "@/shared/store/category";

interface Props {
  title: string;
  items: any[];
  listClassName?: string;
  categoryId: number;
  className?: string;
}

export function ProductsList({
  className,
  listClassName,
  title,
  items,
  categoryId,
}: Props): JSX.Element {
  const setActiveCategory = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategory(categoryId);
    }
  }, [intersection?.isIntersecting, categoryId, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((item, i) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.productItems[0].price}
          />
        ))}
      </div>
    </div>
  );
}
