import { useState } from "react";
import { Container, Header, List } from "./components";
import styles from "./index.module.css";

function App() {
  const [data, setData] = useState([]);
  console.log(data);
  const removeTodo = (id) => {
    const removeArr = [...data].filter((todo) => todo.id !== id);
    setData(removeArr);
  };
  const addData = (inputData) => {
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
