import { useState } from "react";
import del from "./img/del.png";
import styles from "./list.module.css";

export const List = ({ data, removeTodo }) => {
  if (Object.keys(data).length === 0) {
    return (
      <div>
        <h2 className={styles.empty}>Пока планов нет </h2>
      </div>
    );
  } else {
    return data.map((todo, index) => (
      <div key={index} className={styles.check}>
        <div key={todo.id} className={styles.container}>
          {todo.text}
        </div>
        <button onClick={() => removeTodo(todo.id)}>
          <img src={del}></img>
        </button>
      </div>
    ));
  }
};
