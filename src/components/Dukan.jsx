import React, { useEffect, useState } from 'react'

function Dukan() {
    var [categories,setCategories] = useState([])
    async function getAllproducts(){
        var x = await fetch("https://fakestoreapi.in/api/products/category").then((res)=>{
            return res.json()
        }).then((data)=>{
            setCategories([...data.categories])
        })
    }

    useEffect(()=>{
        getAllproducts();
    },[])

    return (
        <div className='border border-4 p-2 m-2'>
            <h1>Dukan</h1>
            {
                categories?.map((c)=>{
                    return <li>{c}</li>
                })
            }
        </div>
    )
}

export default Dukan