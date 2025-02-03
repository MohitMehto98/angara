"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export const WelcomePage = ({ products }) => {
  const [productId, setProductId] = useState("");

  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-6">
        Find Your Perfect Product
      </h2>

      <div className="relative">
        <input
          type="text"
          placeholder="Enter the product ID..."
          className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </div>

      <div className="text-xs sm:text-sm text-gray-500 flex flex-col mt-4">
        <p className="italic">
          Enter one of the following product IDs for testing:
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {products.map((product) => (
            <span
              key={product.id}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs border border-gray-300"
            >
              {product.id}
            </span>
          ))}
        </div>
      </div>

      <Link
        href={productId ? `/product/${productId}` : "#"}
        className={`group flex items-center justify-center gap-2 mt-6 w-full py-3 sm:py-4 rounded-lg text-sm sm:text-base font-medium ${
          productId
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        } transition-all duration-300`}
      >
        <span>Go to Product Page</span>
        <ArrowRightIcon className="w-5 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  );
};
