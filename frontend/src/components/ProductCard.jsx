import { Button, Dialog, Flex, TextArea, TextField } from "@radix-ui/themes";
import { PenBox, Trash2 } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

function ProductCard({ product, setShowModal, setProductId, refreshProducts }) {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [loading, setLoading] = useState(false);
  const closeRef = useRef(null); // 👈 Reference to close dialog

  function handleDeleteProduct(id) {
    setShowModal(true);
    setProductId(id);
  }

  async function updateProductById(id) {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
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
        await response.json();
        toast.success("Product updated successfully!");
        await refreshProducts();
        closeRef.current?.click(); // ✅ Close the dialog manually
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
    <div className="border border-gray-500/25 rounded shadow-lg bg-gray-950">
      <div>
        <img
          src={product?.imageUrl}
          alt={product?.name}
          className="overflow-hidden rounded-t w-full h-48 object-cover"
        />
        <div className="p-2">
          <h4 className="font-semibold">{product?.name}</h4>
          <p>${product?.price}</p>
          <p className="line-clamp-3">{product?.description}</p>

          <div className="flex space-x-2 mt-3">
            {/* Update Dialog */}
            <Dialog.Root>
              <Dialog.Trigger>
                <PenBox
                  size={18}
                  className="p-1 bg-blue-400 text-black rounded cursor-pointer"
                />
              </Dialog.Trigger>

              <Dialog.Content maxWidth="600px">
                <Dialog.Title>Edit Product</Dialog.Title>
                <Flex direction="column" gap="3">
                  <TextField.Root
                    placeholder="Product name"
                    variant="soft"
                    size={1}
                    value={updatedProduct.name}
                    onChange={(e) =>
                      setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                    }
                  />
                  <TextField.Root
                    placeholder="Product price"
                    size={1}
                    type="number"
                    variant="soft"
                    value={updatedProduct.price}
                    onChange={(e) =>
                      setUpdatedProduct({ ...updatedProduct, price: e.target.value })
                    }
                  />
                  <TextField.Root
                    placeholder="Stock quantity"
                    size={1}
                    type="number"
                    variant="soft"
                    value={updatedProduct.stock}
                    onChange={(e) =>
                      setUpdatedProduct({ ...updatedProduct, stock: e.target.value })
                    }
                  />
                  <TextField.Root
                    placeholder="Image URL"
                    size={1}
                    type="url"
                    variant="soft"
                    value={updatedProduct.imageUrl}
                    onChange={(e) =>
                      setUpdatedProduct({ ...updatedProduct, imageUrl: e.target.value })
                    }
                  />
                  <TextArea
                    size="3"
                    placeholder="Description"
                    variant="soft"
                    rows={5}
                    value={updatedProduct.description}
                    onChange={(e) =>
                      setUpdatedProduct({ ...updatedProduct, description: e.target.value })
                    }
                  />
                </Flex>

                <Flex gap="3" mt="4" justify="end">
                  <Dialog.Close>
                    <Button variant="soft" color="gray" disabled={loading}>
                      Cancel
                    </Button>
                  </Dialog.Close>
                  {/* Hidden close button to trigger manually */}
                  <Dialog.Close asChild>
                    <button
                      ref={closeRef}
                      className="hidden"
                      aria-hidden="true"
                    />
                  </Dialog.Close>
                  <Button onClick={() => updateProductById(product._id)} disabled={loading}>
                    {loading ? "Updating..." : "Update"}
                  </Button>
                </Flex>
              </Dialog.Content>
            </Dialog.Root>

            {/* Delete Button */}
            <Trash2
              size={18}
              className="p-1 bg-red-300 text-black rounded cursor-pointer"
              onClick={() => handleDeleteProduct(product._id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
