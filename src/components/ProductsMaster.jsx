import React from 'react'
import products from './products'
import { Link } from 'react-router-dom'
function ProductsMaster() {
  return (
    <div className='border border-4 p-2 m-2'>
        <h1>Products</h1>
        <ul>
          {
            products.map((p)=>{
              return <li>
                  <Link to={"/productdetails/"+p.id}>{p.title}</Link>
                </li>
            })
          }
        </ul>
    </div>
  )
}

export default ProductsMaster