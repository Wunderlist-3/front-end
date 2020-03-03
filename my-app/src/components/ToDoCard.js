import React from "react";

export default function ToDoCard( props ) {
  return (
      <div className='todo-card'>
        <h2>{props.name}</h2>
        <h3>{props.color}</h3>
      </div>
    )
}