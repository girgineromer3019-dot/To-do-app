import React from 'react'
import Todo from './Todo'

function Todolist({todos}) {

  if (!todos || todos.length === 0) {
    return (
      <div style={{textAlign:'center', fontSize:'18px', marginTop:'20px'}}>No tasks yet. Please add a task.</div>
    )
  }

  return (
    <div className='todolist'>
        {
          todos && todos.map((todo) => {
              return <Todo key={todo.id} todo = {todo}/>
          })
        }
    </div>
  )
}

export default Todolist