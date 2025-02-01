"use client";

import React from "react";
import ProductInfo from "./ProductInfo";
import ProductImage from "./ProductImage";
import { useProductContext } from "@/context/ProductContext";

export default function ProductDetail(props) {
  const { productOptions, loading } = useProductContext();

  const { productId } = props;
  const product = productOptions.find((p) => p.id === productId);
  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-[70vh] bg-gray-50">
      <ProductImage media={product?.images} />
      <ProductInfo product={product} />
    </div>
  );
}
