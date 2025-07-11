import { Key, PenBox, Trash2Icon } from 'lucide-react';


function ProductCard({ key, product }) {
  async function deleteProduct(id){
    try {
      const response = await fetch("http://localhost:5000/api/products${id}", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (response.ok) {
        console.log("Product deleted successfully");
      
      }

      const data = response.json();
      return data.product
    }
    catch (error) {
      console.error("Error deleting product:", error);
    }

  }
  return (
   <> 
    <div key={Key} className=" border border-gray-500 bg-gray-900 rounded shadow-lg ">
      <div>
        <img
          className="rounded overflow-hidden rounded-t w-full"
          src={product?.imageUrl}
          alt={product?.name}
        />
        <div className="p-2">
          <h4>{product?.name}</h4>
          <p>${product?.price}</p>
          <p>{product?.description}</p>
          <div className="flex items-center space-x-2 mt-2">
            <PenBox size={23} className="p-1 bg-blue-500 text-black rounded" />
            <Trash2Icon
              size={23}
              className="p-1 bg-red-500 text-black rounded"
              onClick={() => deleteProduct(product._id)}
            />
          </div>
        </div>
      </div>
    </div>
   </> 
  );
}

export default ProductCard