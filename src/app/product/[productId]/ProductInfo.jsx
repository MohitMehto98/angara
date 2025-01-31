"use client";

import React from "react";

const ProductInfo = () => {
  return (
    <div className="flex-1 bg-gray-100 p-8 lg:p-16 flex flex-col">
      <h1 className="text-2xl lg:text-4xl font-bold mb-4">
        Classic Aquamarine and Diamond Ring
      </h1>
      <p className="text-xl text-gray-700 mb-6">
        ₹237,589 <span className="text-sm text-green-600">(20% Off)</span>
      </p>
      <p className="text-gray-600 mb-8">
        Get this elegant Aquamarine and Diamond ring, perfect for every
        occasion. Customizable options available.
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
