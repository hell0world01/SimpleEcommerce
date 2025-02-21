import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Context'
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const {products} = useContext(ShopContext);
    const [product, setProductList] = useState([]);

    useEffect(() => {
        setProductList(products.slice(0,10))
    }, [])
  return (
    <div className='my-10'>
        {/* Rendering product items */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            product.map( (value, index) => (
                <ProductItem key={index} id={value._id} image={value.image} name={value.name} price={value.price}/>
            ))
        }
        </div>
    </div>
  )
}

export default LatestCollection