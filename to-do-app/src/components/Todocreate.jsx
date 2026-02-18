import React from 'react'
import '../App.css'

function Todocreate() {
  return (
    <div className='todocreate'>
        <input className='todo-input' type="text" placeholder="Enter a new task..."></input>
        <button className='add-button'>Add</button>
    </div>
  )
}

export default Todocreate