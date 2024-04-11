import React, { useEffect } from 'react'

function Todo(props) {
  console.log("Todo Component Rendered:",props.t)
    useEffect(()=>{
        console.log("Todo useEffect with no dep array called")
        return ()=>{
            console.log("Unmounting time")
        }
    },[])
  return (
    <div className='border border-2 m-2 p-2'>
        {props.t}
        <button onClick={()=>{props.deleteTodo(props.i)}}>Delete</button>
    </div>
  )
}

export default React.memo(Todo)