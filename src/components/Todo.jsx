import React, { useEffect, useRef, useState } from 'react'
import './Todo.css'
import Todoitem from './Todoitem'

const Todo = () => {
  const [todolist,settodolist]=useState([]);
  const textref=useRef();
  const add=()=>{
    const textmain=textref.current.value.trim();
    if(textmain===" "){
      return null;
    }
    const newtodo={
      id: Date.now(),
      text: textmain,
      isComplete:false
    }
    settodolist((prev)=>[...prev,newtodo]);
    textref.current.value="";
  }
  const toggle=(id)=>{
    settodolist((prvtodo)=>{
      return prvtodo.map((todo)=>{
        if(todo.id===id){
          return {...todo, isComplete: !todo.isComplete}
        }
        return todo;
      })
    })
  }
  const deletelist=(id)=>{
    settodolist((prevtodo)=>{
      return prevtodo.filter((todo)=>todo.id!==id)
    })
  }
  useEffect(()=>{
    console.log(todolist);
    
  },[todolist])
  return (
    <div className='main'>
        <div className="container">
            <h3>To-Do List</h3>
            <div>
              <input ref={textref} placeholder='Add the shedule' type="text" />
              <button onClick={add}>Add</button>
            </div>
            <div>
              {todolist.map((item,index)=>{
                return <Todoitem key={index} id={item.id} text={item.text} isComplete={item.isComplete} deletelist={deletelist} toggle={toggle}/>
              })}
            </div>
        </div>
    </div>
  )
}

export default Todo