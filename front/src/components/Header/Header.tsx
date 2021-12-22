import  { FunctionComponent } from "react";
import { TodoForm } from "../TodoForm";

import styles from "./header.module.css";

type TProps={
  addData : ( inputText : string) => void;
}

export const Header:FunctionComponent<TProps> = ({addData}) => {
  return (
    <header className={styles.container}>
      <TodoForm onSubmit={addData} />
    </header>
  );
};
