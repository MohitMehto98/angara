import React from "react";
import ProductInfo from "./ProductInfo";
import ProductImage from "./ProductImage";

export default function ProductDetail() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      <ProductImage />
      <ProductInfo />
    </div>
  );
}
