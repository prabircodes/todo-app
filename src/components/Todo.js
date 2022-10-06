import React, { useState } from 'react'
import ShowTodo from './ShowTodo'

import './Todo.css'
function Todo() {
  const [task, setTask] = useState('')
  const [data, setData] = useState([])

  const changeHandler = (e) => {
    setTask(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    const newData = task
    setData([...data, newData])
    setTask('')
  }

  const deleteTask =(a)=>{
    const finalData = data.filter((curEle,index)=>{
        return index !== a;
    })
    setData(finalData)
}

  return (
    <div className='container'>
      <div className='header-app'>Todo App in React JS</div>
      <div className='body-app'>
        <form className='form-task' onSubmit={submitHandler}>
          <input
            className='task'
            type='text'
            id='task'
            placeholder='Add new task'
            value={task}
            onChange={changeHandler}
          />
          <button className='btn'>Add Task</button>
        </form>
        {data.map((value, index) => {
          return (
            <ShowTodo
              key={index}
              id={index}
              task={value}
              onSelect={deleteTask}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Todo
