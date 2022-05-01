import logo from "./logo.svg";
import "./App.css";
import Header from "./mycomponents/header.js";
import Todos from "./mycomponents/todos.js";
import Addtodo from "./mycomponents/addtodo.js";
import Footer from "./mycomponents/footer.js";
import React, { useState, useEffect } from "react";

function App() {
  let initTodo;
  if (localStorage.getItem("todo") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todo"));
  }
  const ondelete = (comingtodo) => {
    console.log("i am ondelete", comingtodo);
    setTodo(
      todos.filter((e) => {
        return e !== comingtodo;
      })
    );
    localStorage.setItem("todo", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };
    setTodo([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodo] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Header title="My todos List" />
      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} ondelete={ondelete} />
      <Footer />
    </>
  );
}

export default App;
