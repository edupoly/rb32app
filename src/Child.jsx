import React from 'react'

function Child(props) {
    console.log("Child Rendered")
  return (
    <div className='border border-danger m-2 p-2'>
        <h1>Child:{props.m}</h1>
    </div>
  )
}

export default React.memo(Child)