import React from 'react'

export default function todoitem({ todos, ondelete }) {
  let todosstyle = {
    margin:"0 0 0 8.5rem"
  }
return (
  <div className="py-4 " style={todosstyle}>
    {/* <p>{todo.sno}</p> */}
    <h4>{todos.title}</h4>
    <p>{todos.disc}</p>
    <div className="align-items-center">
      <input className="htmlhtmlForm-check-input " type="checkbox" value="" id="" />
      <label className="htmlhtmlForm-check-label ms-2 text-center" htmlFor="flexCheckDefault">Done</label>
      <button className="btn btn-sm  ms-3" style={{background:"#FF914D"}} onClick={() => { ondelete(todos) }}>Delete</button>
    </div>
  </div>
)
}
