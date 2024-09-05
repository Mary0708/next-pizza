import Link from "next/link";
import React from "react";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export function ProductCard({
  id,
  name,
  className,
  price,
  imageUrl,
}: Props): JSX.Element {
  return (
    <div className={className}>
      <Link href={`/products/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt="Logo" />
        </div>
      </Link>
    </div>
  );
}
