import React from 'react'

export default function todoitem({ todos, ondelete }) {
  return (
    <div className="py-4">
      {/* <p>{todo.sno}</p> */}
      <h4>{todos.title}</h4>
      <p>{todos.disc}</p>
      <div className="align-items-center">
      <input className="htmlhtmlForm-check-input " type="checkbox" value="" id="" />
      <label className="htmlhtmlForm-check-label ms-2 text-center" htmlFor="flexCheckDefault">Done</label>
      <button className="btn btn-sm btn-warning align-items-center ms-3" onClick={()=>{ondelete(todos)}}>Delete</button>
      </div>
    </div>
  )
}
