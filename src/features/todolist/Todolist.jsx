import React from 'react'
import Todo from './Todo'
import { useEffect } from 'react';
function Todolist() {
    
    var [todos,setTodos] = React.useState(['Pay rent','get car','play football'])
    var [newTodo,setNewTodo] = React.useState('');
    var nref = React.useRef();
    function updateNewTodo(e){
        setNewTodo(e.target.value);
    }
    function addTodo(){
        setTodos([...todos,newTodo])
    }

    var deleteTodo = React.useCallback(function(ind){
        console.log("ind:",ind)
        console.log("todos:",todos)
        var temp = [...todos];
        temp.splice(ind,1);
        setTodos([...temp])
    },[todos])
    useEffect(()=>{
        console.log("Todolist useEffect with empty dep array")
        nref.current.focus();
    },[])
    return (
        <div className='p-2 border border-2 border-success'>
            <h2>Todolist</h2>
            <input type="text" onKeyUp={(e)=>{updateNewTodo(e)}} ref={nref}/>
            <button onClick={()=>{addTodo()}}>Add Todo</button>
            {
                todos.map((todo,i)=>{
                    return <Todo key={i} t={todo} i={i} deleteTodo={deleteTodo}></Todo>
                })
            }
        </div>
    )
}

export default Todolist