import React, { useState } from 'react';


export default function AddTodo({ addTodo }) {
    let mystyle = {
        minWidth: "100px",
        margin: "10px auto",
        
    }
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title can't be blank.")
        }
        addTodo(title, desc);
        setTitle("");
        setDesc("");

    }
    return (
        <div className="container" style={mystyle}>
            <h3 className="pt-3">Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        aria-describedby="emailHelp"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">
                        Todo Discription
                    </label>
                    <input
                        type="text"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-primary" style={{background:"#FF914D",border:"none",color:"black",margin:"1rem 0 "}}>
                    Add Todo
                </button>
            </form>
        </div>
    );
}
