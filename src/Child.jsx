import React from 'react'

function Child(props,pref) {
  console.log(props)
  return (
    <div className='border border-danger m-2 p-2'>
        <h1>Child</h1>
        <input type="text" ref={pref}/>
    </div>
  )
}

export default React.forwardRef(Child);