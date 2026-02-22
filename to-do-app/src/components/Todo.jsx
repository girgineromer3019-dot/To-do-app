import React from 'react'
import { CiSquareRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";

function Todo() {
  return (
    <div className="todo-item">
        <div>
            <p>First to-do</p>
        </div>
        <div className='icons'>
            <CiSquareRemove />
            <CiEdit />
        </div>
    </div>
  )
}

export default Todo