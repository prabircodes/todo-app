import React from 'react'
import './ShowTodo.css'



const ShowTodo = (props) => {
    
function cancelTask(){
  props.onSelect(props.id)
  
}
  return (

    <div className='wrapper'>
      <div className='task-body'>
        <h4>{props.task}</h4>
        <button onClick={cancelTask} className='btn'> X </button>
      </div>
    </div>
  )
}

export default ShowTodo
