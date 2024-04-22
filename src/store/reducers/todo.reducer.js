var inititalState={
    todos:["get bmw",'purchase house','moksha school fee']
}

function todoReducer(state=inititalState,action){
    console.log("todo reducer called")
    
    if(action.type==='ADDTODO'){
        console.log("Addtodo",action)
        return {...state,todos:[...state.todos,action.payload]}
    }
    return state
}
export default todoReducer;