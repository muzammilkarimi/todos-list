import "./App.css";
import Header from "./mycomponents/header.js";
import Todos from "./mycomponents/todos.js";
import Addtodo from "./mycomponents/addtodo.js";
import Footer from "./mycomponents/footer.js";
import About from "./mycomponents/About.js";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
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
      <Router>
        <Header title="My todos List" />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Addtodo addTodo={addTodo} />
                <Todos todos={todos} ondelete={ondelete} />
              </>
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
