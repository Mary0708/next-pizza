import React from "react";

export default function ProductPage({
  params: { id },
}: {
  params: { id: string };
}): JSX.Element {
  return (
    <div>
      <h1>Product {id}</h1>
    </div>
  );
}
