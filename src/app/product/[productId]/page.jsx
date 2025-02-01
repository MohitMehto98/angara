import React from "react";
import ProductDetail from "./ProductDetails";

export default async function page({ params }) {
  const { productId } = await params;

  return <ProductDetail productId={productId} />;
}
