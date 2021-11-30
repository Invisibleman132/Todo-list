import del from "./img/del.png";
import { threeMult } from "../util";
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
      <div key={index} className={styles.container}>
        <div key={todo.id} className={styles.todoText}>
          <abbr title={todo.text}>{todo.text}</abbr>
        </div>
        <div className={styles.three}>
          <abbr className={styles.tabr} title={threeMult(todo.text)}>
            {threeMult(todo.text)}
          </abbr>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.dateWrapper}>
            <section>{todo.date}</section>
            <section>{todo.time}</section>
          </div>
          <button onClick={() => removeTodo(todo.id)}>
            <img src={del} alt=""></img>
          </button>
        </div>
      </div>
    ));
  }
};
