import React, { useEffect, useState } from 'react'

function Counter() {
    var [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("CounterComponent useEffect with empty dep array")
    },[])
    useEffect(()=>{
        console.log("CounterComponent useEffect with no dep array")
    })
    function inc(){
        setCount(count+1)
    }
    function dec(){
        setCount(count-1)
    }
  return (
    <div className='p-2 border border-success'>
        <h1>Counter:{count}</h1>
        <button onClick={()=>{inc()}}>Increment</button>
        <button onClick={()=>{dec()}}>Decrement</button>
    </div>
  )
}

export default Counter
// hooks are functions
// life cycle hooks
// updation:(change detection)
// data binding