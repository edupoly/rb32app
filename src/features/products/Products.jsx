import React from 'react'

import { useGetAllProductsQuery, useLazyGetAllProductsQuery } from '../../services/product'

function Products() {
    var [isLoading,data]=useGetAllProductsQuery()
    
    return (
        <div>
            <h2>Products</h2>
            {
            
            }
        </div>
    )
}

export default Products