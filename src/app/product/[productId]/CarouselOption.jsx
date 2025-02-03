"use client";

import React from "react";

const CarouselOption = ({
  label,
  values,
  handleVariationData,
  name,
  variationData,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <p className="text-sm font-medium text-gray-700">{label}</p>
        <div className="group relative ml-2">
          <svg
            className="w-5 h-5 text-gray-400 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="absolute hidden group-hover:block bg-white text-sm text-gray-700 p-2 border border-gray-200 rounded-lg shadow-md -mt-12 ml-2 w-[16rem] max-w-[90vw]">
            Check our sizing guide for help.
          </div>
        </div>
      </div>
      <ul className="flex flex-wrap gap-2">
        {values.map((ringSize, index) => (
          <li
            key={`${name}-${index}`}
            className={`py-2 px-4 border rounded-lg cursor-pointer transition-all duration-200 text-center 
              ${
                variationData.ring_size === ringSize
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }
            `}
            onClick={() => handleVariationData("ring_size", ringSize)}
          >
            {ringSize}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarouselOption;
