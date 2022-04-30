import React from 'react'
import Todoitem from './todoitem'

export default function todos(props) {
    return (
        <div className="container">
            <h3 className="text-center my-3 "style={{color:"#FF914D"}}>TODO lists</h3>
            {props.todos.length === 0 ? "No Todos to display" :
                props.todos.map((todos) => {
                    return <Todoitem todos={todos} key={todos.sno} ondelete={props.ondelete} />
                })}
        </div>
    )
}
