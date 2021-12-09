import del from "./img/del.png";
import { threeMult, dateString, timeString } from "../util";
import styles from "./list.module.css";
import { FunctionComponent } from "react";

interface IData{
  id:number;
  text:string;
  date: Date;
}

 type TProps={
  data:IData[];
  removeTodo : (id:number) => void;
 }

export const List:FunctionComponent<TProps> = ({data, removeTodo }) => {
  if (Object.keys(data).length === 0) {
    return (
      <div>
        <h2 className={styles.empty}>Пока планов нет </h2>
      </div>
    );
  } else {
    return <>{data.map((todo:IData, index:number) => (
      <div key={index} className={styles.container}>
        <div key={todo.id} className={styles.todoText}>
          <abbr title={todo.text}>{todo.text}</abbr>
        </div>
        <div className={styles.three}>
          <abbr className={styles.tadr} title={threeMult(todo.text)}>
            {threeMult(todo.text)}
          </abbr>
        </div>
        <div className={styles.rightSide}>
          <abbr
            title={`${timeString(todo.date)} \xa0 ${dateString(todo.date)}`}
          >{`${timeString(todo.date)} \xa0 ${dateString(todo.date)}`}</abbr>
          <button onClick={() => removeTodo(todo.id)}>
            <img src={del} alt=""></img>
          </button>
        </div>
      </div>
    ))}
    </>
  }
};
