import React from 'react'

export default function todoitem({ todo }) {
  return (
    <div>
      {/* <p>{todo.sno}</p> */}
      <h4>{todo.title}</h4>
      <p>{todo.disc}</p>
      <button className="btn btn-sm btn-danger">Delete</button>
    </div>
  )
}
