import React, { useState } from 'react'
import { useGetAllCountriesQuery } from '../../services/countries';

function Countries() {
    var [countries,setCountries]=useState([]);
    var {isLoading,data}=useGetAllCountriesQuery();
    console.log("isLoading::",isLoading)
    console.log("data::",data)
    return (
        <div className='border border-2 m-2 p-2 border-secondary'>
            <h3>Countries</h3>
            {
                data?.map((country)=>{
                    return(
                        <li>{country.name.common}</li>
                    )
                })
            }
        </div>
    )
}

export default Countries