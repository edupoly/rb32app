import React from 'react'
import { useSelector } from 'react-redux'

function Products() {
    var products = useSelector(state=>state.products)
    console.log(x)
  return (
    <div>Products</div>
  )
}

export default Products