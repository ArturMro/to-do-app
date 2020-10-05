import React from "react";
import ReactDOM from "react-dom";
import TodoItem from "./Todoitem.js";

const TodoItemsFromOutSide = [
  { id: "learn-react", labelName: "Learn react" },
  { id: "create-todo-app", labelName: "Create a todo app" },
  { id: "profit", labelName: "Profiiiit" },
  { id: "have-fun", labelName: "Have fun!!" },
  { id: "prettier", labelName: "It is cool!" },
];

const App = () => (
  <div id="my-todo-app" className="my-todo-app">
    <h1>My todo app</h1>

    {TodoItemsFromOutSide.map((item) => {
      return <TodoItem key={item.id} id={item.id} labelName={item.labelName} />;
    })}
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
