import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePage() {
  const navigate = useNavigate()
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    imageUrl: "",
    description: "",
  });

  const submitProduct = async (e) => {
    e.preventDefault();

    const serializedData = {
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      stock: Number(newProduct.stock),
      imageUrl: newProduct.imageUrl,
      description: newProduct.description,
    };

    console.log("New Product Data:", serializedData);
    try {
      //create the fetch method
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serializedData),
      });

      if (response.ok) {
        const data = response.json();
        console.log("Product created successfully", data.product);
        navigate("/")
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };
  return (
    <div className="w-full border h-screen">
      <div className="border-2 p-6 max-w-xl mx-auto">
        <h2 className="text-center font-bold mb-4 ">Create a new Product</h2>
        <form onSubmit={submitProduct} action="" className=" dark:bg-gray-950">
          <div className="w-full mb-3">
            <input
              type="text"
              id="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              placeholder="Enter product Name"
              className="w-full px-4 py-2 rounded border   border-gray-500/50"
            />
          </div>

          <div className="w-full">
            <input
              type="float"
              id="price"
              min={0}
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              placeholder="Enter product Price"
              className="border  border-gray-500/50 w-full px-4 py-2 rounded mb-3 outline-none cursor-pointer"
            />
          </div>
          <div className="w-full">
            <input
              type="url"
              id="url"
              min={0}
              value={newProduct.imageUrl}
              onChange={(e) =>
                setNewProduct({ ...newProduct, imageUrl: e.target.value })
              }
              placeholder="Enter Image URL"
              className="border  border-gray-500/50 w-full px-4 py-2 rounded mb-3 outline-none cursor-pointer"
            />
          </div>

          <div className="w-full">
            <input
              type="number"
              id="stock"
              min={0}
              value={newProduct.stock}
              onChange={(e) =>
                setNewProduct({ ...newProduct, stock: e.target.value })
              }
              placeholder="Enter product Stock"
              className="border border-gray-500/50 w-full px-4 py-2 rounded mb-3 outline-none "
            />
          </div>

          <textarea
            name=""
            id=""
            placeholder="Enter product Description"
            className="border border-gray-500/25 w-full outline-none py-2 px-4 "
            rows={3}
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold px-4 py-2 rounded mt-3 hover:bg-blue-800 cursor-pointer"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePage;