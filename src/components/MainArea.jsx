import React from 'react'
import Counter from '../features/counter/Counter'
import Todolist from '../features/todolist/Todolist'

function MainArea() {
  return (
    <div className='px-5'>
        <Todolist></Todolist>
        <Counter></Counter>
    </div>
  )
}

export default MainArea