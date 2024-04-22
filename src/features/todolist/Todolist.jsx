import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './todolistSlice';

function Todolist() {
    var {todos} = useSelector(state=>state.todolist)
    var dispatch = useDispatch();
    var [nt,setNt] = useState('')
    console.log(todos)
  return (
    <div className='border border-2 m-2 p-2 border-success'>
        <h2>Todolist</h2>
        <input type="text" onChange={(e)=>{setNt(e.target.value)}}/>
        <button onClick={()=>{dispatch(addTodo(nt))}}>Add Todo</button>
        <ul>
            {
                todos?.map((todo)=>{
                    return <li>
                        {todo}
                        <button>delete</button>
                        </li>
                })
            }
        </ul>
    </div>
  )
}

export default Todolist