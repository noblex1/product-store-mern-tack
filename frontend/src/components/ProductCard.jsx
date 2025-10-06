import { Button, Dialog, Flex, TextArea, TextField } from "@radix-ui/themes";
import { PenBox, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { API_BASE_URL } from "../config";

function ProductCard({ product, setShowModal, setProductId, refreshProducts }) {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // ✅ Control dialog visibility

  function handleDeleteProduct(id) {
    setShowModal(true);
    setProductId(id);
  }

  async function updateProductById(id) {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: updatedProduct.name,
          price: parseFloat(updatedProduct.price),
          stock: Number(updatedProduct.stock),
          imageUrl: updatedProduct.imageUrl,
          description: updatedProduct.description,
        }),
      });

      if (response.ok) {
        await refreshProducts();
        toast.success("Product updated successfully!");
        setOpen(false); // ✅ Close the dialog manually
      } else {
        toast.error("Failed to update product.");
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-900 transition-colors">
      <img
        src={product?.imageUrl}
        alt={product?.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{product?.name}</h4>
        <p className="text-sm text-gray-700 dark:text-gray-300">${product?.price}</p>
        <p className="text-sm mt-1 text-gray-600 dark:text-gray-400 line-clamp-3">
          {product?.description}
        </p>

        <div className="flex items-center gap-3 mt-3">
          {/* ✅ Controlled Dialog */}
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger>
              <PenBox
                size={18}
                className="p-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded cursor-pointer transition"
              />
            </Dialog.Trigger>

            <Dialog.Content maxWidth="600px">
              <Dialog.Title>Edit Product</Dialog.Title>
              <Flex direction="column" gap="3">
                <TextField.Root
                  placeholder="Product name"
                  variant="soft"
                  value={updatedProduct.name}
                  onChange={(e) =>
                    setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                  }
                />
                <TextField.Root
                  placeholder="Product price"
                  type="number"
                  variant="soft"
                  value={updatedProduct.price}
                  onChange={(e) =>
                    setUpdatedProduct({ ...updatedProduct, price: e.target.value })
                  }
                />
                <TextField.Root
                  placeholder="Stock quantity"
                  type="number"
                  variant="soft"
                  value={updatedProduct.stock}
                  onChange={(e) =>
                    setUpdatedProduct({ ...updatedProduct, stock: e.target.value })
                  }
                />
                <TextField.Root
                  placeholder="Image URL"
                  type="url"
                  variant="soft"
                  value={updatedProduct.imageUrl}
                  onChange={(e) =>
                    setUpdatedProduct({ ...updatedProduct, imageUrl: e.target.value })
                  }
                />
                <TextArea
                  placeholder="Description"
                  rows={5}
                  variant="soft"
                  value={updatedProduct.description}
                  onChange={(e) =>
                    setUpdatedProduct({ ...updatedProduct, description: e.target.value })
                  }
                />
              </Flex>

              <Flex justify="end" gap="3" mt="4">
                <Button variant="soft" color="gray" onClick={() => setOpen(false)} disabled={loading}>
                  Cancel
                </Button>
                <Button onClick={() => updateProductById(product._id)} disabled={loading}>
                  {loading ? "Updating..." : "Update"}
                </Button>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>

          {/* Delete Button */}
          <Trash2
            size={18}
            onClick={() => handleDeleteProduct(product._id)}
            className="p-1.5 bg-red-400 hover:bg-red-500 text-white rounded cursor-pointer transition"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
