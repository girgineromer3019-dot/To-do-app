import React from 'react'
import { CiSquareRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";

function Todo({ todo }) {
  return (
    <div className="todo-item">
        <div>
            {todo.content}
        </div>
        <div className='icons'>
            <CiSquareRemove />
            <CiEdit />
        </div>
    </div>
  )
}

export default Todo