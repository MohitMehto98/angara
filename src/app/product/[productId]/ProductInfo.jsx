"use client";

import React, { useState, useMemo } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import Option from "./Option";
import CarouselOption from "./CarouselOption";
import PriceBreakdownTable from "@/components/Generic/PriceBreakdownTable";
import { useCartContext } from "@/context/CartContext";

const ProductInfo = ({ product }) => {
  const [variationData, setVariationData] = useState({
    gemstone: null,
    quality: null,
    metal: null,
    carat_weight: null,
    ring_size: null,
  });

  const { addToCart, cartItems, clearCart } = useCartContext();

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

  const [currency, setCurrency] = useState("INR");
  const conversionRate = 82;
  const convertedPrice =
    currency === "INR"
      ? `₹${priceBreakdown?.grand_total.toLocaleString() || "0"}`
      : `$${(priceBreakdown?.grand_total / conversionRate).toFixed(2) || "0"}`;

  const handleToggleCurrency = () => {
    setCurrency((prevCurrency) => (prevCurrency === "INR" ? "USD" : "INR"));
  };

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
        <span className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-3xl font-bold text-gray-900">
            {convertedPrice}
            <span className="text-xs text-gray-500 ml-1">
              (MRP incl. of all taxes)
            </span>
          </p>
          <button
            onClick={handleToggleCurrency}
            className="w-full sm:w-auto mt-2 sm:mt-0 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition text-sm sm:text-base"
          >
            Switch to {currency === "INR" ? "USD" : "INR"}
          </button>
        </span>
        <p className="text-green-700 text-sm font-medium mt-2 sm:mt-0">
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
      {cartItems.some((item) => item.id === product.id) ? (
        <button
          className="mt-6 w-full bg-red-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-red-600 transition"
          aria-label="Remove from Cart"
          onClick={() => clearCart(product.id)}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition"
          aria-label="Add to Cart"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductInfo;
