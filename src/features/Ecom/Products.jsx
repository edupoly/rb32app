import React from 'react'
import { useSelector } from 'react-redux'

function Products() {
    var products = useSelector(state=>state.products)

  return (
    <div>Products</div>
  )
}

export default Products