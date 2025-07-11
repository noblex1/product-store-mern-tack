import React, {useEffect, useState} from 'react'
import { Rocket } from 'lucide-react'
import ProductCard from '../components/ProductCard'

function HomePage() {
  const [products, setProducts] = useState([]);
  console.log(products)
  
  
  // Function to fetch products from the database
  async function getAllProducts() {
    //use the javascript fetch method
    const response = await fetch("http://localhost:5000/api/products", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },

      
    })
    // Check if the response is ok (status code 200-299)
    if (response.ok) {
        const data = await response.json();
        
        setProducts(data.data); // Set the products state with the fetched data
      }
  }

  useEffect(() => {
    // Call the function to fetch products when the component mounts
    getAllProducts();
  }, [])
  return (
    <div className=' min-h-screen m-0 '>
       <div className=" w-[90%] mx-auto">
        <h2 className=" flex justify-center items-center">CurrentProcucts
          <Rocket size={18} />
        </h2>

        {/**Grid container for products */}

        <div className=" grid grid-cols-3 gab-4 py-5">  
        {products.map((product) => (
          
           <ProductCard
              key={product._id} 
              product={product}
               />
          
        ))}
        </div>
       </div>
    </div>
  )
}

export default HomePage