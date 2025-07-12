import { Button } from "@radix-ui/themes";

function ConfirmModal({ setShowModal, productId, getAllProducts }) {
  async function deleteProduct(id) {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Product Deleted Successfully!");
        
        // Refresh the product list
        getAllProducts();
        setShowModal(false);
      } else {
        console.log("Failed to delete the product.");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  return (
    <div className="absolute w-full h-screen bg-black/60 top-0 left-0 z-50 flex justify-center items-center">
      <div className="max-w-2xl mx-auto bg-gray-900 border border-gray-500/25 p-4">
        <h2>Confirm Product Deletion</h2>

        <div className="flex gap-2 mt-4">
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
