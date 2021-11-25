import { useState } from "react";
import add from "./img/add.png";
import styles from "./input.module.css";
import { List } from "../List";

export const Input = (props) => {
  const [input, setInput] = useState("");
  const [btnState, setBtnState] = useState("true");

  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
    if (e.target.value) {
      setBtnState("");
    } else {
      setBtnState("true");
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
    setBtnState("true");
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
        <img src={add} />
      </button>
    </form>
  );
};
