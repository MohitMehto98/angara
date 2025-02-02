// import { PhoneIcon, ShoppingCartIcon } from "@heroicons/react/20/solid";
// import React from "react";

// const Header = () => {
//   return (
//     <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
//       {/* Logo */}
//       <div className="flex-shrink-0">
//         <img
//           src="https://www.angara.in/cdn/shop/files/angara-logo_f109f2a4-9991-42d7-b0d2-0976c58e7f94.svg?v=1686499699&width=800"
//           alt="Angara Logo"
//           className="h-14 w-30"
//         />
//       </div>

//       {/* Navigation Links (Commented Out for Now) */}
//       {/* <ul className="flex space-x-8 text-base font-medium" role="menu">
//         <li role="menuitem" className="hover:text-gray-600 cursor-pointer">
//           Rings
//         </li>
//         <li role="menuitem" className="hover:text-gray-600 cursor-pointer">
//           Necklaces
//         </li>
//         <li role="menuitem" className="hover:text-gray-600 cursor-pointer">
//           Mangalsutra
//         </li>
//         <li role="menuitem" className="hover:text-gray-600 cursor-pointer">
//           Earrings
//         </li>
//         <li role="menuitem" className="hover:text-gray-600 cursor-pointer">
//           Bracelets
//         </li>
//         <li role="menuitem" className="hover:text-gray-600 cursor-pointer">
//           Gifts
//         </li>
//         <li role="menuitem" className="hover:text-gray-600 cursor-pointer">
//           Gold Coins
//         </li>
//       </ul> */}

//       {/* Icons (Phone and Shopping Cart) */}
//       <div className="flex items-center space-x-6">
//         <div className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 cursor-pointer">
//           <PhoneIcon className="w-5 h-5" />
//           <span className="text-sm font-medium">Contact Us</span>
//         </div>
//         <div className="relative">
//           <ShoppingCartIcon className="w-5 h-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
//           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">

//           </span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;

import { PhoneIcon, ShoppingCartIcon } from "@heroicons/react/20/solid";
import React from "react";

const Header = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://www.angara.in/cdn/shop/files/angara-logo_f109f2a4-9991-42d7-b0d2-0976c58e7f94.svg?v=1686499699&width=800"
              alt="Angara Logo"
              className="h-10"
            />
          </div>

          {/* Desktop Navigation Links */}
          {/* <ul className="hidden md:flex space-x-8 text-sm font-medium">
            <li className="hover:text-gray-600 cursor-pointer">Rings</li>
            <li className="hover:text-gray-600 cursor-pointer">Necklaces</li>
            <li className="hover:text-gray-600 cursor-pointer">Mangalsutra</li>
            <li className="hover:text-gray-600 cursor-pointer">Earrings</li>
            <li className="hover:text-gray-600 cursor-pointer">Bracelets</li>
            <li className="hover:text-gray-600 cursor-pointer">Gifts</li>
            <li className="hover:text-gray-600 cursor-pointer">Gold Coins</li>
          </ul> */}

          {/* Icons (Phone and Shopping Cart) */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-gray-900 cursor-pointer">
              <PhoneIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Contact Us</span>
            </div>
            <div className="relative">
              <ShoppingCartIcon className="w-5 h-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                3
              </span>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="flex md:hidden">
              {/* <MenuIcon className="w-6 h-6 text-gray-700 hover:text-gray-900 cursor-pointer" /> */}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {/* <ul className="md:hidden mt-4 space-y-2 text-sm font-medium">
          <li className="hover:text-gray-600 cursor-pointer">Rings</li>
          <li className="hover:text-gray-600 cursor-pointer">Necklaces</li>
          <li className="hover:text-gray-600 cursor-pointer">Mangalsutra</li>
          <li className="hover:text-gray-600 cursor-pointer">Earrings</li>
          <li className="hover:text-gray-600 cursor-pointer">Bracelets</li>
          <li className="hover:text-gray-600 cursor-pointer">Gifts</li>
          <li className="hover:text-gray-600 cursor-pointer">Gold Coins</li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Header;
