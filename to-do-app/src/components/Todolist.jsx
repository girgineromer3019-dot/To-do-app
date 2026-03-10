import React from 'react'
import Todo from './Todo'

function Todolist({ todos, onRemoveTodo, onUpdateTodo, onToggleComplete }) {

  if (!todos || todos.length === 0) {
    return (
      <div style={{textAlign:'center', fontSize:'18px', marginTop:'20px'}}>
        No tasks yet. Please add a task.
      </div>
    )
  }

  return (
    <div className='todolist'>
      {todos.map((todo) => (
        <Todo 
          key={todo.id} 
          todo={todo} 
          onRemoveTodo={onRemoveTodo} 
          onUpdateTodo={onUpdateTodo} 
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  )
}

export default Todolist