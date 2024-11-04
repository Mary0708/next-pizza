import React from "react";
import { notFound } from "next/navigation";
import { prisma } from "@/prisma/prisma-client";
import { ChooseProductModal } from "@/shared/components/shared/index";

export default async function ProductModalPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      productItems: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />;
}
