import { Logo } from "../Logo";
import { Input } from "../Input";
import { useState } from "react";
import styles from "./header.module.css";
export const Header = (props) => {
  return (
    <header className={styles.container}>
      <Logo />
      <Input onSubmit={props.addData} />
    </header>
  );
};
