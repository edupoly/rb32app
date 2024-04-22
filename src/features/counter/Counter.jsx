import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset } from './counterSlice'
function Counter() {
    var {count} = useSelector(state=>state.counter)
    var dispatch = useDispatch();
    return (
        <div className='border border-2 m-2 p-2 border-info'>
            <h2>Counter:{count}</h2>
            <button onClick={()=>{dispatch(increment())}}>Inc</button>
            <button onClick={()=>{dispatch(decrement())}}>Dec</button>
            <button onClick={()=>{dispatch(reset())}}> Reset</button>
        </div>
    )
}

export default Counter