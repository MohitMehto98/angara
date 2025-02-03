// "use client";

// import React from "react";
// import ProductInfo from "./ProductInfo";
// import ProductImage from "./ProductImage";
// import { useProductContext } from "@/context/ProductContext";

// export default function ProductDetail(props) {
//   const { productOptions, loading } = useProductContext();

//   const { productId } = props;
//   const product = productOptions.find((p) => p.id === productId);
//   if (loading) {
//     return <p>Loading product details...</p>;
//   }

//   if (!product) {
//     return <p>Product not found!</p>;
//   }

//   return (
//     <div className="flex flex-col lg:flex-row min-h-[100vh] bg-gray-50">
//       <ProductImage media={product?.images} />
//       <ProductInfo product={product} />
//     </div>
//   );
// }

"use client";

import React from "react";
import ProductInfo from "./ProductInfo";
import ProductImage from "./ProductImage";
import { useProductContext } from "@/context/ProductContext";
import RecommendProduct from "@/components/Generic/RecommendProduct";

export default function ProductDetail({ productId }) {
  const { productOptions, loading } = useProductContext();
  const product = productOptions.find((p) => p.id === productId);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-gray-500 text-lg">Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-red-500 text-lg font-medium">Product not found!</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 p-2 ">
        <ProductImage media={product.images} />
        <ProductInfo product={product} />
      </div>
      <div className="bg-gray-50 border-t-2 mb-4">
        <p className="text-xl text-center font-semibold text-gray-700 pt-4">
          You May Also Like
        </p>
        <RecommendProduct products={product} />
      </div>
    </div>
  );
}
