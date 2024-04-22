import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './store/actions'
function Todolist({todos:{todos},dispatch}) {

    var [newtask,setNewtask]=useState('')
    function handleNewTask(e){
        setNewtask(e.target.value)
    }
    return (
        <div className="border border-2 border-info m-2 p-2">
            <h1>Todolist</h1>
            <input type="text" onChange={handleNewTask}/>
            <button onClick={()=>{dispatch(addTodo(newtask))}}>Add Todo</button>
            <ul>
                {
                    todos?.map((t,i)=>{
                        return <li>{t}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default connect(store=>store)(Todolist)