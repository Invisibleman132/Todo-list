import { useState } from "react";
import add from "./img/add.png";
import styles from "./todoForm.module.css";

export const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const [btnState, setBtnState] = useState(true);

  const handleChange = (e) => {
    if (e.target.value === "  ") {
      e.target.value = "";
    }
    setInput(e.target.value);
    if (e.target.value) {
      setBtnState(false);
    }
    if (!e.target.value.trim()) {
      setBtnState(true);
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const dateData = new Date();
    props.onSubmit(input, dateData);
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
        required
        pattern="^[^А-Яа-яЁё]+$"
        title="Русские символы запрещены"
      />
      <button disabled={btnState}>
        <img src={add} alt="" />
      </button>
    </form>
  );
};
