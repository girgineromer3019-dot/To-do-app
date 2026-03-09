import React, { useState } from 'react'


function Todocreate({ onCreateTodo }) {

  const [newTodo, setNewTodo] = useState('')

  const clearInput = () => {
    setNewTodo('')
  }

  const createTodo = () => {
    if(!newTodo) return;

    const request = {
    id : Math.floor(Math.random() * 999999999999),
    content : newTodo,
    }

    onCreateTodo(request);
    setNewTodo('');
  }

  return (
    <div className='todocreate'>
        <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='todo-input' type="text" placeholder="Enter a new task..."></input>
        <button className='add-button' onClick={createTodo}>Add</button>
    </div>
  )
}

export default Todocreate