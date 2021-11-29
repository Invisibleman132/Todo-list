import { useState } from "react";
import { Container, Header, List } from "./components";
import styles from "./index.module.css";

function App() {
  const [data, setData] = useState([]);
  const removeTodo = (id) => {
    const removeArr = [...data].filter((todo) => todo.id !== id);
    setData(removeArr);
  };
  const addData = (inputText, dateData) => {
    const getDate = (dateData) => {
      const date = `${dateData.getUTCDate()}.${
        dateData.getMonth() + 1
      }.${dateData.getFullYear()} `;
      return date;
    };

    const getTime = (dateData) => {
      const time = ` ${dateData.getHours()}:${dateData.getMinutes()}`;
      return time;
    };
    const inputData = {
      id: Math.floor(Math.random() * 10000),
      text: inputText,
      date: getDate(dateData),
      time: getTime(dateData),
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
