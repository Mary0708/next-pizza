import React from "react";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";
import { Container } from "./container";
import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";

interface Props {
  categories: Category[];
  className?: string;
}

export function TopBar({ categories, className }: Props): JSX.Element {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5",
        className
      )}
    >
      <Container className="flex items-center justify-between ">
        <Categories items={categories} />
        <SortPopup />
      </Container>
    </div>
  );
}
