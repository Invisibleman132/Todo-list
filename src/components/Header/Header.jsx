import { TodoForm } from "../TodoForm";

import styles from "./header.module.css";
export const Header = (props) => {
  return (
    <header className={styles.container}>
      <h1>Todo list</h1>
      <TodoForm onSubmit={props.addData} />
    </header>
  );
};
