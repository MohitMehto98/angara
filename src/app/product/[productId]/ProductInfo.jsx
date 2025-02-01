"use client";

import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";

const ProductInfo = ({ product }) => {
  console.log(product);
  return (
    <div className="flex-1 bg-slate-50 p-8 lg:p-16 flex flex-col">
      <h1 className="text-xl lg:text-xl mb-4">{product.title}</h1>
      <p className="flex text-sm">
        {Array.from({ length: 5 }, (_, index) => (
          <StarIcon key={index} className="w-4 h-4 text-black-500" />
        ))}
        <span className="ml-3 text-xs border-b">
          {product.reviews}: {product.reviews > 1 ? "Reviews" : "Review"}
        </span>
      </p>
      <p className="text-2xl text-gray-900 my-2">
        ₹{product.base_price}
        {/* <span className="text-sm text-green-600">(20% Off)</span> */}
      </p>
      <p className="text-green-700 text-sm">
        Exclusive Offer: <span>{product.exclusive_offer}</span>
      </p>

      {/* Customization Options */}
      <div className="space-y-4">
        {/* Gemstone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gemstone Type
          </label>
          <select className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Aquamarine</option>
            <option>Diamond</option>
            <option>Sapphire</option>
          </select>
        </div>

        {/* Metal Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Metal Type
          </label>
          <select className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>White Gold</option>
            <option>Yellow Gold</option>
            <option>Rose Gold</option>
          </select>
        </div>

        {/* Ring Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ring Size
          </label>
          <select className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </select>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button className="mt-8 w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductInfo;
