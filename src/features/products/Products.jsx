import React from 'react'

import { useGetAllProductsQuery, useLazyGetAllProductsQuery } from '../../services/product'

function Products() {
    var [getProdFn]=useLazyGetAllProductsQuery()
    function getAllProds(){
        getProdFn().then(function(res){
            console.log(res)
        })
    }
    return (
        <div>
            <h2>Products</h2>
            <button onClick={()=>{getAllProds()}}>Get Products</button>
        </div>
    )
}

export default Products