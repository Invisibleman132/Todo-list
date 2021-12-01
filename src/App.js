import { useState } from "react";
import { Container, Header, List } from "./components";
import { createDate } from "./components/util";
import styles from "./index.module.css";

function App() {
  const [data, setData] = useState([]);
  const removeTodo = (id) => {
    const removeArr = [...data].filter((todo) => todo.id !== id);
    setData(removeArr);
  };
  const addData = (inputText) => {
    const inputData = {
      id: Math.floor(Math.random() * 10000),
      text: inputText,
      date: createDate(),
    };
    setData([...data, inputData]);
  };

  return (
    <Container>
      <Header onChange={setData} addData={addData} />
      <div className={styles.listContainer}>
        <List data={data} removeTodo={removeTodo} />
      </div>
    </Container>
  );
}

export default App;
