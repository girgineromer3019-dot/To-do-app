import './App.css'
import { useState } from 'react'
import Todocreate from './components/Todocreate'
import React from 'react'
import Todolist from './components/Todolist'

function App() {
  return (
    <div className = 'App'>
      <div style={{textAlign:'center',fontSize:'24px', width:'100%', padding:'10px', borderBottom:'1px solid black'}}>TO-DO-LIST</div>
      <div>
        <Todocreate />
        <Todolist />
      </div>
    </div>
  )
}

export default App
