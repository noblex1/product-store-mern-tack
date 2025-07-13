import { Button, TextField, TextArea } from "@radix-ui/themes";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

function CreatePage() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: "",
    imageUrl: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: product.name,
          price: Number(product.price),
          stock: Number(product.stock),
          imageUrl: product.imageUrl,
          description: product.description,
        }),
      });

      if (response.ok) {
        toast.success("✅ Product created successfully!");
        setProduct({
          name: "",
          price: "",
          stock: "",
          imageUrl: "",
          description: "",
        });
        setTimeout(() => navigate("/"), 1000); // redirect to home
      } else {
        toast.error("❌ Failed to create product.");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error("⚠️ Server error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Create New Product</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <TextField.Root
          placeholder="Product name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          required
        />

        <TextField.Root
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          required
        />

        <TextField.Root
          type="number"
          placeholder="Stock"
          value={product.stock}
          onChange={(e) => setProduct({ ...product, stock: e.target.value })}
          required
        />

        <TextField.Root
          placeholder="Image URL"
          value={product.imageUrl}
          onChange={(e) => setProduct({ ...product, imageUrl: e.target.value })}
        />

        <TextArea
          placeholder="Product description"
          rows={5}
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />

        <Button type="submit" color="blue" className="w-full">
          Create Product
        </Button>
      </form>
    </div>
  );
}

export default CreatePage;
