import del from "./img/del.png";
import styles from "./list.module.css";

export const List = ({ data, removeTodo }) => {
  const threeMult = (text) => {
    let threeText = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] % 3 === 0) {
        threeText += text[i];
      }
    }
    if (!threeText) {
      return "No 3's";
    }
    return threeText.replace(/\s+/g, "");
  };
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
          {todo.text}
        </div>
        <div className={styles.three}>
          <section>{threeMult(todo.text)}</section>
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
