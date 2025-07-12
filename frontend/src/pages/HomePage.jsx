import { Rocket } from "lucide-react";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ConfirmModal from "../components/ConfirmModal";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState(null);

  // ✅ Fetch all products from backend
  async function getAllProducts() {
    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProducts(data.data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  // ✅ Fetch products on component mount
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="h-screen m-0 overflow-auto">
      <div className="w-[90%] mx-auto">
        <h2 className="text-center flex justify-center items-center gap-2 font-bold text-xl mb-4">
          Current Products <Rocket size={18} />
        </h2>

        {/* ✅ Grid container for the products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.length > 0 &&
            products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                setShowModal={setShowModal}
                setProductId={setProductId}
              />
            ))}
        </div>
      </div>

      {/* ✅ Confirm Delete Modal */}
      {showModal && (
        <ConfirmModal
          setShowModal={setShowModal}
          productId={productId}
          getAllProducts={getAllProducts}
        />
      )}
    </div>
  );
}

export default HomePage;
