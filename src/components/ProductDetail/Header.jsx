import React from "react";

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <div className="flex-shrink-0">
        <img
          src="https://www.angara.in/cdn/shop/files/angara-logo_f109f2a4-9991-42d7-b0d2-0976c58e7f94.svg?v=1686499699&width=800"
          alt="Angara Logo"
          className="h-16 w-40"
        />
      </div>

      <ul className="flex space-x-8 text-base font-medium" role="menu">
        <li role="menuitem" className="hover:text-gray-600 cursor-pointer">
          Rings
        </li>
        <li role="menuitem" className="hover:text-gray-600 cursor-pointer">
          Necklaces
        </li>
        <li role="menuitem" className="hover:text-gray-600 cursor-pointer">
          Mangalsutra
        </li>
        <li role="menuitem" className="hover:text-gray-600 cursor-pointer">
          Earrings
        </li>
        <li role="menuitem" className="hover:text-gray-600 cursor-pointer">
          Bracelets
        </li>
        <li role="menuitem" className="hover:text-gray-600 cursor-pointer">
          Gifts
        </li>
        <li role="menuitem" className="hover:text-gray-600 cursor-pointer">
          Gold Coins
        </li>
      </ul>

      <div className="flex space-x-4">
        {/* <ul className="w-[20%]">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Header;
