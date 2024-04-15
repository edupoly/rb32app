import React, { useContext, useEffect } from 'react'
import DetailsContext from '../../PersonalDetails'

function Todo(props) {
  console.log("Todo Component Rendered:",props.t)
  var details = useContext(DetailsContext);
    useEffect(()=>{
        console.log("Todo useEffect with no dep array called")
        return ()=>{
            console.log("Unmounting time")
        }
    },[])
  return (
    <div className='border border-2 m-2 p-2'>
      <img src={details.imgurl} style={{width:"30px",borderRadius:"50%"}} alt="" />
        {details.firstname}-{props.t}
        <button onClick={()=>{props.deleteTodo(props.i)}}>Delete</button>
    </div>
  )
}

export default React.memo(Todo)