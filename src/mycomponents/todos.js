import React from 'react'
import Todoitem from './todoitem'

export default function todos(props) {
    return (
        <div className="container">
            <h3 className="text-center my-3">Todays TODO list</h3>
            {props.todos.map((todos) => {
               return <Todoitem todo={todos} />

            })}
        </div>
    )
}
