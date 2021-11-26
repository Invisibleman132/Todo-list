import { useState } from "react";
import add from "./img/add.png";
import styles from "./todoForm.module.css";

export const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const [btnState, setBtnState] = useState(true);

  const handleChange = (e) => {
    setInput(e.target.value);
    if (e.target.value) {
      setBtnState(false);
    } else {
      setBtnState(true);
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    props.onSubmit(input);
    setInput("");
    setBtnState(true);
  };
  return (
    <form className={styles.container} onSubmit={handleSumbit}>
      <input
        type="text"
        placeholder="Что запланировано ?"
        name="text"
        value={input}
        onChange={handleChange}
      />
      <button disabled={btnState}>
        <img src={add} alt="" />
      </button>
    </form>
  );
};
