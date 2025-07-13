import { PlusIcon, SunIcon, MoonIcon, ShoppingCart } from "lucide-react";
import React from 'react';
import { Link } from "react-router-dom";

function Navbar({ toggleTheme, isDarkMode }) {
  return (
    <header className="w-full py-3 shadow-md bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        {/* Brand Title */}
        <Link to="/">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Product Store</h2>
            <ShoppingCart className="text-gray-800 dark:text-gray-200" />
          </div>
        </Link>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <Link to="/create-products">
            <PlusIcon
              size={20}
              className="w-8 h-8 p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-transform hover:scale-105 shadow"
              title="Add Product"
            />
          </Link>

          <button
            onClick={toggleTheme}
            title="Toggle Theme"
            className="w-8 h-8 p-1.5 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-full transition-transform hover:scale-105 shadow"
          >
            {isDarkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
