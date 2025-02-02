// "use client";

// import React, { useState } from "react";
// import { StarIcon } from "@heroicons/react/20/solid";
// import Option from "./Option";
// import CarouselOption from "./CarouselOption";

// const ProductInfo = ({ product }) => {
//   const [variationData, setVariationData] = useState({
//     gemstone: null,
//     quality: null,
//     metal: null,
//     carat_weight: null,
//     ring_size: null,
//   });
//   console.log(product)

//   const handleVariationData = (name, value) => {
//     setVariationData((prevData) => ({
//       ...prevData,
//       [name]: name === "carat_weight" ? parseFloat(value) : value,
//     }));
//   };

//   const renderStars = (count) => (
//     <div className="flex items-center">
//       {Array.from({ length: 5 }, (_, index) => (
//         <StarIcon
//           key={index}
//           className={`w-5 h-5 ${
//             index < count ? "text-yellow-500" : "text-gray-300"
//           }`}
//         />
//       ))}
//       <span className="ml-3 text-sm text-gray-600">
//         {product.reviews} {product.reviews > 1 ? "Reviews" : "Review"}
//       </span>
//     </div>
//   );

//   return (
//     <div className="flex-1 bg-slate-50 p-6 lg:p-10 space-y-6">
//       <h1 className="text-2xl font-semibold text-gray-900">{product.title}</h1>
//       {renderStars(product.reviews)}
//       <div>
//         <p className="text-3xl font-bold text-gray-900">
//           ₹{product.base_price.toLocaleString()}
//         </p>
//         <p className="text-green-700 text-sm font-medium">
//           Exclusive Offer: {product.exclusive_offer}
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {Object.entries(product.variations).map(([key, values]) => (
//           <div key={`${key}`}>
//             {key !== "ring_size" ? (
//               <Option
//                 key={key}
//                 label={key.replace("_", " ").toUpperCase()}
//                 values={values}
//                 name={key}
//                 handleVariationData={handleVariationData}
//               />
//             ) : (
//               <CarouselOption
//                 key={key}
//                 label={key.replace("_", " ").toUpperCase()}
//                 values={values}
//                 name={key}
//                 handleVariationData={handleVariationData}
//                 variationData={variationData}
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Add to Cart Button */}
//       <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition">
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductInfo;

// "use client";

// import React, { useState, useMemo } from "react";
// import { StarIcon } from "@heroicons/react/20/solid";
// import Option from "./Option";
// import CarouselOption from "./CarouselOption";
// import PriceBreakdownTable from "@/components/Generic/PriceBreakdownTable";

// const ProductInfo = ({ product }) => {
//   const [variationData, setVariationData] = useState({
//     gemstone: null,
//     quality: null,
//     metal: null,
//     carat_weight: null,
//     ring_size: null,
//   });
//   console.log(product);
//   const handleVariationData = (name, value) => {
//     setVariationData((prevData) => ({
//       ...prevData,
//       [name]: name === "carat_weight" ? parseFloat(value) : value,
//     }));
//   };

//   const priceBreakdown = useMemo(() => {
//     const { metal, stones, making_charges, subtotal, gst, grand_total } =
//       product.price_breakdown;

//     // Adjust metal value based on selected metal type (if applicable)
//     const selectedMetal = variationData.metal || metal.type;
//     const metalValue = metal.value;

//     // Adjust stone values based on selected gemstone and carat weight
//     const selectedGemstone = variationData.gemstone || stones[0].type;
//     const selectedCaratWeight = variationData.carat_weight || stones[0].carat;

//     const stoneValue = stones.reduce((total, stone) => {
//       if (stone.type === selectedGemstone) {
//         return stone.value * (selectedCaratWeight / stone.carat);
//       }
//       return total;
//     }, 0);

//     // Calculate subtotal
//     const newSubtotal = metalValue + stoneValue + making_charges;

//     // Calculate GST (assuming 3% of subtotal)
//     const newGST = newSubtotal * 0.03;

//     // Calculate Grand Total
//     const newGrandTotal = newSubtotal + newGST;

//     return {
//       metal: { ...metal, value: metalValue },
//       stones: [
//         {
//           type: selectedGemstone,
//           carat: selectedCaratWeight,
//           value: stoneValue,
//         },
//       ],
//       making_charges,
//       subtotal: newSubtotal,
//       gst: newGST,
//       grand_total: newGrandTotal,
//     };
//   }, [variationData, product.price_breakdown]);

//   // Render stars for reviews
//   const renderStars = (count) => (
//     <div className="flex items-center !mt-1">
//       {Array.from({ length: 5 }, (_, index) => (
//         <StarIcon
//           key={index}
//           className={`w-5 h-5 ${
//             index < count ? "text-yellow-500" : "text-gray-300"
//           }`}
//         />
//       ))}
//       <span className="ml-3 text-sm text-gray-600">
//         {product.reviews} {product.reviews > 1 ? "Reviews" : "Review"}
//       </span>
//     </div>
//   );

//   return (
//     <div className="flex-1 bg-slate-50 p-2 lg:p-10 space-y-1">
//       <h1 className="text-2xl font-semibold text-gray-900">{product.title}</h1>
//       {renderStars(product.reviews)}
//       <div>
//         <p className="text-3xl font-bold text-gray-900">
//           ₹{priceBreakdown.grand_total.toLocaleString()}
//           <span className="text-xs text-gray-500 ml-1">
//             (MRP incl. of all taxes)
//           </span>
//         </p>
//         <p className="text-green-700 text-sm font-medium">
//           Exclusive Offer: {product.exclusive_offer}
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {Object.entries(product.variations).map(([key, values]) => (
//           <div key={`${key}`}>
//             {key !== "ring_size" ? (
//               <Option
//                 key={key}
//                 label={key.replace("_", " ").toUpperCase()}
//                 values={values}
//                 name={key}
//                 handleVariationData={handleVariationData}
//               />
//             ) : (
//               <CarouselOption
//                 key={key}
//                 label={key.replace("_", " ").toUpperCase()}
//                 values={values}
//                 name={key}
//                 handleVariationData={handleVariationData}
//                 variationData={variationData}
//               />
//             )}
//           </div>
//         ))}
//       </div>
//       <PriceBreakdownTable priceBreakdown={priceBreakdown} />
//       {/* Add to Cart Button */}
//       <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition">
//         Add to Cart
//       </button>
"use client";

import React, { useState, useMemo } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import Option from "./Option";
import CarouselOption from "./CarouselOption";
import PriceBreakdownTable from "@/components/Generic/PriceBreakdownTable";

const ProductInfo = ({ product }) => {
  const [variationData, setVariationData] = useState({
    gemstone: null,
    quality: null,
    metal: null,
    carat_weight: null,
    ring_size: null,
  });

  const handleVariationData = (name, value) => {
    setVariationData((prevData) => ({
      ...prevData,
      [name]: name === "carat_weight" ? parseFloat(value) : value,
    }));
  };

  const priceBreakdown = useMemo(() => {
    if (!product.price_breakdown) return null;

    const { metal, stones, making_charges } = product.price_breakdown;
    const selectedMetal = variationData.metal || metal.type;
    const selectedGemstone = variationData.gemstone || stones[0].type;
    const selectedCaratWeight = variationData.carat_weight || stones[0].carat;

    const stoneValue = stones.reduce((total, stone) => {
      if (stone.type === selectedGemstone) {
        return stone.value * (selectedCaratWeight / stone.carat);
      }
      return total;
    }, 0);

    const newSubtotal = metal.value + stoneValue + making_charges;
    const newGST = newSubtotal * 0.03;
    const newGrandTotal = newSubtotal + newGST;

    return {
      metal: { ...metal, value: metal.value },
      stones: [
        {
          type: selectedGemstone,
          carat: selectedCaratWeight,
          value: stoneValue,
        },
      ],
      making_charges,
      subtotal: newSubtotal,
      gst: newGST,
      grand_total: newGrandTotal,
    };
  }, [variationData, product.price_breakdown]);

  const renderStars = (count) => (
    <div className="flex items-center mt-1">
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon
          key={index}
          className={`w-5 h-5 ${
            index < count ? "text-yellow-500" : "text-gray-300"
          }`}
          aria-hidden="true"
        />
      ))}
      <span className="ml-3 text-sm text-gray-600">
        {product.reviews} {product.reviews > 1 ? "Reviews" : "Review"}
      </span>
    </div>
  );

  if (!product) {
    return (
      <p className="text-gray-500 text-center mt-10">
        Product details not available.
      </p>
    );
  }

  return (
    <div className="flex-1 bg-slate-50 lg:py-2 lg:px-10 space-y-4">
      <h1 className="text-2xl font-semibold text-gray-900">{product.title}</h1>
      {renderStars(product.reviews)}

      <div>
        <p className="text-3xl font-bold text-gray-900">
          ₹{priceBreakdown?.grand_total.toLocaleString() || "0"}
          <span className="text-xs text-gray-500 ml-1">
            (MRP incl. of all taxes)
          </span>
        </p>
        <p className="text-green-700 text-sm font-medium">
          Exclusive Offer: {product.exclusive_offer}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(product.variations || {}).map(([key, values]) => (
          <div key={key} className={key === "ring_size" ? "col-span-2" : ""}>
            {key !== "ring_size" ? (
              <Option
                label={key.replace("_", " ").toUpperCase()}
                values={values}
                name={key}
                handleVariationData={handleVariationData}
              />
            ) : (
              <CarouselOption
                label={key.replace("_", " ").toUpperCase()}
                values={values}
                name={key}
                handleVariationData={handleVariationData}
                variationData={variationData}
              />
            )}
          </div>
        ))}
      </div>

      {priceBreakdown && (
        <PriceBreakdownTable priceBreakdown={priceBreakdown} />
      )}

      <button
        className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition"
        aria-label="Add to Cart"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductInfo;
