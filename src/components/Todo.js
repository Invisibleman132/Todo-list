import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo({ todos, removeTodo }) {
  return todos.map((todo, index) => (
    <div key={index}>
      <div key={todo.id}>{todo.text}</div>
      <button onClick={() => removeTodo(todo.id)}>Удалить</button>
    </div>
  ));
}

export default Todo;
