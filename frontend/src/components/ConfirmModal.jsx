import { Button } from "@radix-ui/themes";
import React from "react";
import { toast } from "sonner";

function ConfirmModal({ setShowModal, productId, refreshProducts }) {
  async function deleteProduct(id) {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Product deleted successfully!");

        // ✅ Wait for refresh to complete before closing modal
        await refreshProducts();
        setShowModal(false);
      } else {
        toast.error(data?.message || "Failed to delete product.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Something went wrong while deleting the product.");
    }
  }

  return (
    <div className="absolute w-full h-screen bg-black/60 top-0 left-0 z-50 flex justify-center items-center">
      <div className="max-w-2xl mx-auto bg-gray-900 border border-gray-500/25 p-4 rounded">
        <h2 className="text-lg font-semibold mb-4 text-white">Confirm Product Deletion</h2>

        <div className="flex gap-2 mt-2">
          <Button onClick={() => setShowModal(false)} variant="outline">
            Cancel
          </Button>
          <Button
            onClick={() => deleteProduct(productId)}
            variant="solid"
            color="red"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
