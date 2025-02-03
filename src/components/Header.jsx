"use client";

import { useCartContext } from "@/context/CartContext";
import { PhoneIcon, ShoppingCartIcon } from "@heroicons/react/20/solid";
import React from "react";

const Header = () => {
  const { cartItems } = useCartContext();
  return (
    <nav className="bg-white shadow-sm  z-50 fixed top-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              src="https://www.angara.in/cdn/shop/files/angara-logo_f109f2a4-9991-42d7-b0d2-0976c58e7f94.svg?v=1686499699&width=800"
              alt="Angara Logo"
              className="h-10"
              width="200" // Set the desired width
              height="40" // Set the desired height
            />
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-gray-900 cursor-pointer">
              <PhoneIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Contact Us</span>
            </div>
            <div className="relative">
              <ShoppingCartIcon className="w-5 h-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {cartItems?.length || 0}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
