import React from 'react'
import ProductCard from '../components/ProductCard';

function ProductsPage() {
    const arr=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div className='grid grid-cols-12'>
        {
            arr.map((p,i)=>(
                <div key={i} className="lg:col-span-4 md:col-span-6 col-span-12">
                    <ProductCard />
                </div>
            ))
        }
    </div>
  )
}

export default ProductsPage;