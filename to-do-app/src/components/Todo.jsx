import React, { useState } from 'react'
import { CiSquareRemove, CiEdit, CiCircleCheck } from "react-icons/ci";

function Todo({ todo, onRemoveTodo, onUpdateTodo, onToggleComplete }) {

  if (!todo || !todo.content) {
    return null;
  }

  const { id, content, completed } = todo;

  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(content)

  // Görevi sil
  const removeTodo = () => {
    onRemoveTodo(id);
  }

  // Edit kaydet
  const saveEdit = () => {
    if (editText.trim() === "") return;
    onUpdateTodo(id, editText);
    setIsEditing(false);
  }

  return (
    <div 
      className="todo-item" 
      style={{ 
        textDecoration: completed ? 'line-through' : 'none', 
        color: completed ? 'gray' : 'black' 
      }}
    >

      {isEditing ? (
        <input 
          value={editText} 
          onChange={(e) => setEditText(e.target.value)} 
          className="todo-input"
        />
      ) : (
        <div>{content}</div>
      )}

      <div className='icons'>
        <CiSquareRemove className='removeicon' onClick={removeTodo} />

        {isEditing ? (
          <button onClick={saveEdit}>Save</button>
        ) : (
          <CiEdit className='editicon' onClick={() => setIsEditing(true)} />
        )}

        <CiCircleCheck className='checkicon' onClick={() => onToggleComplete(id)} />
      </div>
    </div>
  )
}

export default Todo