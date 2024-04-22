import React from 'react'
import {connect} from 'react-redux'
function Counter({count,incCount,decCount}) {
  return (
    <div className="border border-2 border-danger m-2 p-2">
        <h1>Counter:{count}</h1>
        <button onClick={incCount}>Increment</button>
        <button onClick={decCount}>Decrement</button>
    </div>
  )
}
function mapStateToProps(state){
  return state.counter
}
function mapDisptachToProps(dispatch){
  return {
    incCount:()=>{
      dispatch({type:'INC'})
    },
    decCount:()=>{
      dispatch({type:'DEC'})
    }
  }
}
export default connect(mapStateToProps,mapDisptachToProps)(Counter);