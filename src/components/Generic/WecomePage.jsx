"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export const WelcomePage = ({ products }) => {
  const [productId, setProductId] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter the product ID"
        className="border p-1 rounded w-full"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <div className="text-xs text-gray-500 flex flex-col mt-2">
        <i>Enter one of the following IDs for testing:</i>
        <span>
          {products.map((product) => (
            <i key={product.id}>{product.id} &nbsp;</i>
          ))}
        </span>
      </div>
      <Link
        href={`/product/${productId}`}
        className={`group p-3 w-full text-center mt-2 ${
          productId ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"
        } rounded-md flex justify-center gap-2 items-center`}
      >
        <span>Go to product page</span>
        <ArrowRightIcon className="w-5 transition-transform duration-300 transform group-hover:translate-x-1" />
      </Link>
    </>
  );
};
