var inititalState={
    count:0
}

function counterReducer(state=inititalState,action){
    console.log("counter reducer called")
    if(action.type==='INC'){
        return {...state,count:state.count+1}
    }
    if(action.type==='DEC'){
        return {...state,count:state.count-1}
    }
    return state
}
export default counterReducer;