import React, {useEffect, useState} from 'react'
import { Rocket } from 'lucide-react'
import ProductCard from '../components/ProductCard'

function HomePage() {
const [products, setProducts] = useState([]);
console.log(products)


  // Functin that fetches all products from the database
  async function getAllProducts(){
    //Use the javascript fetch method
    const response = await fetch("http://localhost:5000/api/products", {
      method: "GET",
      headers: {
        "Content-Type": 'application/json'
      },
    })
     //check if response is ok
    if(response.ok){
      const data = await response.json();
      console.log(data.data);
      setProducts(data.data) 
    }
  }

     useEffect(() =>{
      getAllProducts();

    }, [])

  return (
    <div className=' h-screen m-0'>
      <div className=' w-[90%] mx-auto'>
        <h2 className='flex justify-center text-center items-center'>Curent Products 
          <Rocket size={18}/>
        </h2>
        {/**Grid container products */}
        <div className=' border-green-500 grid grid-cols-3'>
           <ProductCard/>

        </div>
       
      </div>

    </div>

  )
}

export default HomePage
