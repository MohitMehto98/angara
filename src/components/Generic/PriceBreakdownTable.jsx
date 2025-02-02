"use client";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

const PriceBreakdownTable = ({ priceBreakdown }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleTableToggle = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="mt-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Price Breakdown</h2>
        {/* <button
          onClick={handleTableToggle}
          className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-all"
          aria-expanded={isVisible}
          aria-label="Toggle price breakdown table"
        >
          <ChevronDownIcon
            className={`w-5 h-5 transform transition-transform ${
              isVisible ? "rotate-180" : ""
            }`}
          />
        </button> */}
      </div>

      {/* Responsive Table/Card Layout */}
        <div className="mt-4">
          {/* Large Screen Table */}
          <table className="hidden sm:table w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-sm font-medium text-gray-700">
                  Component
                </th>
                <th className="p-3 text-sm font-medium text-gray-700">
                  Weight
                </th>
                <th className="p-3 text-sm font-medium text-gray-700">Rate</th>
                <th className="p-3 text-sm font-medium text-gray-700">Value</th>
              </tr>
            </thead>
            <tbody>
              {/* Metal Row */}
              <tr className="border-b">
                <td className="p-3 text-sm text-gray-700">Metal</td>
                <td className="p-3 text-sm text-gray-700">
                  {priceBreakdown.metal.weight} g
                </td>
                <td className="p-3 text-sm text-gray-700">
                  ₹{priceBreakdown.metal.rate.toLocaleString()}
                </td>
                <td className="p-3 text-sm text-gray-700">
                  ₹{priceBreakdown.metal.value.toLocaleString()}
                </td>
              </tr>
              {/* Gemstone Rows */}
              {priceBreakdown.stones.map((stone, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3 text-sm text-gray-700">{stone.type}</td>
                  <td className="p-3 text-sm text-gray-700">
                    {stone.carat} ct
                  </td>
                  <td className="p-3 text-sm text-gray-700">
                    ₹{(stone.value / stone.carat).toLocaleString()}
                  </td>
                  <td className="p-3 text-sm text-gray-700">
                    ₹{stone.value.toLocaleString()}
                  </td>
                </tr>
              ))}
              {/* Making Charges Row */}
              <tr className="border-b">
                <td className="p-3 text-sm text-gray-700">Making Charges</td>
                <td className="p-3 text-sm text-gray-700">-</td>
                <td className="p-3 text-sm text-gray-700">-</td>
                <td className="p-3 text-sm text-gray-700">
                  ₹{priceBreakdown.making_charges.toLocaleString()}
                </td>
              </tr>
              {/* Subtotal Row */}
              <tr className="border-b">
                <td className="p-3 text-sm text-gray-700 font-medium">
                  Subtotal
                </td>
                <td className="p-3 text-sm text-gray-700">-</td>
                <td className="p-3 text-sm text-gray-700">-</td>
                <td className="p-3 text-sm text-gray-700">
                  ₹{priceBreakdown.subtotal.toLocaleString()}
                </td>
              </tr>
              {/* GST Row */}
              <tr className="border-b">
                <td className="p-3 text-sm text-gray-700">GST (3%)</td>
                <td className="p-3 text-sm text-gray-700">-</td>
                <td className="p-3 text-sm text-gray-700">-</td>
                <td className="p-3 text-sm text-gray-700">
                  ₹{priceBreakdown.gst.toLocaleString()}
                </td>
              </tr>
              {/* Grand Total Row */}
              <tr>
                <td className="p-3 text-sm text-gray-700 font-semibold">
                  Grand Total
                </td>
                <td className="p-3 text-sm text-gray-700">-</td>
                <td className="p-3 text-sm text-gray-700">-</td>
                <td className="p-3 text-sm text-gray-700 font-semibold">
                  ₹{priceBreakdown.grand_total.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Small Screen Cards */}
          <div className="sm:hidden space-y-4">
            {/* Metal */}
            <div className="p-4 bg-gray-50 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-700">Metal</h3>
              <p className="text-sm text-gray-600">
                Weight: {priceBreakdown.metal.weight} g
              </p>
              <p className="text-sm text-gray-600">
                Rate: ₹{priceBreakdown.metal.rate.toLocaleString()}
              </p>
              <p className="text-sm text-gray-700 font-medium">
                Value: ₹{priceBreakdown.metal.value.toLocaleString()}
              </p>
            </div>
            {/* Gemstones */}
            {priceBreakdown.stones.map((stone, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg shadow space-y-1"
              >
                <h3 className="text-sm font-medium text-gray-700">
                  {stone.type}
                </h3>
                <p className="text-sm text-gray-600">
                  Weight: {stone.carat} ct
                </p>
                <p className="text-sm text-gray-600">
                  Rate: ₹{(stone.value / stone.carat).toLocaleString()}
                </p>
                <p className="text-sm text-gray-700 font-medium">
                  Value: ₹{stone.value.toLocaleString()}
                </p>
              </div>
            ))}
            {/* Making Charges */}
            <div className="p-4 bg-gray-50 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-700">
                Making Charges
              </h3>
              <p className="text-sm text-gray-700 font-medium">
                ₹{priceBreakdown.making_charges.toLocaleString()}
              </p>
            </div>
            {/* Subtotal */}
            <div className="p-4 bg-gray-50 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-700">Subtotal</h3>
              <p className="text-sm text-gray-700 font-medium">
                ₹{priceBreakdown.subtotal.toLocaleString()}
              </p>
            </div>
            {/* GST */}
            <div className="p-4 bg-gray-50 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-700">GST (3%)</h3>
              <p className="text-sm text-gray-700 font-medium">
                ₹{priceBreakdown.gst.toLocaleString()}
              </p>
            </div>
            {/* Grand Total */}
            <div className="p-4 bg-gray-50 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-900">Grand Total</h3>
              <p className="text-lg font-semibold text-gray-900">
                ₹{priceBreakdown.grand_total.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default PriceBreakdownTable;
