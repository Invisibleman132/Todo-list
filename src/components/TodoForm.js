import React, { useState } from "react";

function TodoForm(props) {
  const [btnState, setBtnState] = useState("true");
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    if (e.target.value) {
      setBtnState(false);
    } else {
      setBtnState(true);
    }
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnState(false);
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Какие планы ?"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      ></input>
      <button className="todo-button" disabled={btnState}>
        Добавить
      </button>
    </form>
  );
}

export default TodoForm;
