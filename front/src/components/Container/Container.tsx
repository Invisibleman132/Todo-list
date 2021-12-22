import React, { FunctionComponent, ReactNode } from "react";


type TProps={
  children : ReactNode;
}

export const Container:FunctionComponent<TProps> = ({ children }) => {
  return <div >{children}</div>;
};
