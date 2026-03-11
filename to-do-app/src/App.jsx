import './App.css'
import { useState } from 'react'
import Todocreate from './components/Todocreate'
import React from 'react'
import Todolist from './components/Todolist'

function App() {

const [todos, setTodos] = useState([])

const createTodo = (newTodo) => {
  setTodos([...todos, { ...newTodo, completed: false }]); 
}

const removeTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));
}

const editTodo = (id, updatedContent) => {
  setTodos(todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, content: updatedContent };
    }
    return todo;
  }));
}

const toggleComplete = (id) => {
  setTodos(todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed }
    }
    return todo
  }))
}

return (
  <div className='App'>
    <div style={{textAlign:'center',fontSize:'30px', width:'100%', padding:'10px', borderBottom:'4px solid black'}}>
      TO-DO-LIST
    </div>
    <div>
      <Todocreate onCreateTodo={createTodo} />
      <Todolist 
        todos={todos} 
        onRemoveTodo={removeTodo} 
        onUpdateTodo={editTodo} 
        onToggleComplete={toggleComplete}
      />
    </div>
  </div>
  )
}

export default App
