import { FunctionComponent } from "react";

import { TTodos } from '../../types';
import { ITodo } from '../../interfaces';
import { threeMult } from "../../utils";

import del from "./img/del.png";

import styles from "./list.module.css";

type TProps={
  data: TTodos;
  removeTodo: (id:number) => void;
}

export const List: FunctionComponent<TProps> = ({ data, removeTodo }) => {
  if (Object.keys(data).length === 0) {
    return (
      <div>
        <h2 className={styles.empty}>Пока планов нет </h2>
      </div>
    );
  } else {
    return <>{data?.map((todo: ITodo, index:number) => (
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
            title={String(todo.date)}
          >{String(todo.date)}</abbr>
          <button onClick={() => removeTodo(todo.id)}>
            <img src={del} alt=""></img>
          </button>
        </div>
      </div>
    ))}
    </>
  }
};
