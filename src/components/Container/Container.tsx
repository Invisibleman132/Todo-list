import React, { FunctionComponent, ReactNode } from "react";
import styles from "./container.module.css";

type TProps={
  children : ReactNode;
}

export const Container:FunctionComponent<TProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
