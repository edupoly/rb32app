import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductDetails } from '../hooks/useProductDetails';

function ProductDetails() {
    var params = useParams();;
    var details = useProductDetails(+params.id);
    console.log(details)
  return (
    <div className=' p-2 m-2'>

        {
            <div className='d-flex flex-wrap'>
                <div className='w-50'>
                    <img src={details.image} alt="" />
                </div>
                <div className='w-50'>
                    <h1>{details.title}</h1>
                    <h2>${details.price}</h2>
                </div>
            </div>
        }
    </div>
  )
}

export default ProductDetails