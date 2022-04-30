import React from 'react'

export default function addtodo() {
  return (
    <div className="container">
        <h3 className="pt-3">Add a Todo</h3>
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Discription</label>
                <input type="text" className="form-control" id="exampleInputPassword1" />
            </div>
            
            <button type="submit" className="btn btn-primary">Add Todo</button>
        </form>
        </div>
  )
}
