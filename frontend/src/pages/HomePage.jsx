import React from 'react'
import { Rocket } from 'lucide-react'
import ProductCard from '../components/ProductCard'

function HomePage() {
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
