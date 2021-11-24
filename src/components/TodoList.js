import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [noTasks, isTasks] = useState("block");
  const [todos, setTodos] = useState([{ id: null, text: "" }]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
    if ([todos].length == 0) {
      isTasks("none");
    } else {
      isTasks("block");
    }
  };

  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      <h2 style={{ display: noTasks }}>Пока планов нету...</h2>
      <Todo todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default TodoList;
