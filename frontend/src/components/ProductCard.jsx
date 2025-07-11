import React from "react";
import { Rocket, RocketIcon, PenBox, Trash2 } from "lucide-react";

function ProductCard() {
  return (
    <div className="border bg-gray-950 rounded shadow-lg">
      <div>
        <img
          src="https://images.unsplash.com/photo-1570034711549-beb1f4695b6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
          alt="" className="overflow-hidden rounded-t"
        />
        <div className="p-2">
          <h4>Iphone 15 Pro Max</h4>
          <p>$799.99</p>
        </div>
        <div className="flex space-x-3">
          <PenBox size={30} className="bg-blue-500 p-1 text-black rounded" />
          <Trash2 size={30} className="bg-red-500 p-1 text-black rounded" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
