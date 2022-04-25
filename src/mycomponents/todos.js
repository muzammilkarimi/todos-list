import React from 'react'
import Todoitem from './todoitem'

export default function todos(props) {
    return (
        <div className="container">
            <h3 className="text-center my-3 text-warning">TODO lists</h3>
            {props.todos.map((todos) => {
               return <Todoitem todos={todos} key={todos.sno} ondelete = {props.ondelete} />

            })}
        </div>
    )
}
