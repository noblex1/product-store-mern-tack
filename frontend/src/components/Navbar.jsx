import { PlusIcon, SunIcon, ShoppingCart } from "lucide-react";
import React from 'react';
import { Link } from "react-router-dom";

function Navbar({ toggleTheme }) {
  return (
    <div className="w-full bg-blue-500 py-3 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
        {/* Brand Title */}
        <Link to="/">
          <div className="flex space-x-2 items-center">
            <h2 className="text-white text-xl font-bold">Product Store</h2>
            <ShoppingCart />
          </div>
        </Link>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <Link to="/create-products">
            <PlusIcon
              size={20}
              className="w-6 h-6 p-1 bg-gray-700 text-white rounded-full shadow-md hover:scale-105 transition-transform"
            />
          </Link>
          <SunIcon
            size={20}
            onClick={toggleTheme}
            className="cursor-pointer w-6 h-6 p-1 bg-gray-700 text-white rounded-full shadow-md hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
