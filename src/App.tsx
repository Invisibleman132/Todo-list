import { useState } from "react";
import { Container, Header, List } from "./components";
import { createDate } from "./components/util";
import styles from "./index.module.css";


interface IData{
  id:number;
  text:string;
  date: Date;
}


function App() {
  const [data, setData] = useState<IData[]>([]);
  const removeTodo = (id:number):void => {
    const removeArr = [...data].filter((todo) => todo.id !== id);
    setData(removeArr);
  };
  const addData = (inputText:string):void => {
    const inputData = {
      id: Math.floor(Math.random() * 10000),
      text: inputText,
      date: createDate(),
    };
    setData([...data, inputData]);
  };

  return (
    <Container>
      <Header addData={addData} />
      <div className={styles.listContainer}>
        <List data={data} removeTodo={removeTodo} />
      </div>
    </Container>
  );
}

export default App;
