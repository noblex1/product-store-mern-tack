import { PlusIcon, SunIcon, ShoppingCart } from "lucide-react";
import React from 'react';


function Navbar() {
  return (
    <div className="w-full bg-blue-500 py-3 shadow-md">
      <div className=" flex items-center max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Brand Title */}
        <div className="flex  space-x-2">
        <h2 className="text-white text-xl font-bold">Product Store </h2> 
        <ShoppingCart className="" />
        </div>

        {/* Icon Section */}
        <div className="flex items-center gap-3">
          <PlusIcon
            size={20}
            className=" w-6 h-6 p-1 bg-gray-700 text-white rounded-full shadow-md hover:scale-105 transition-transform"
          />
          <SunIcon
            size={20}
            className="w-6 h-6 p-1 bg-gray-700 text-white rounded-full shadow-md hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
