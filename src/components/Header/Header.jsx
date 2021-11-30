import { TodoForm } from "../TodoForm";

import styles from "./header.module.css";
export const Header = (props) => {
  return (
    <header className={styles.container}>
      <TodoForm onSubmit={props.addData} />
    </header>
  );
};
