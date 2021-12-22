import { useEffect, useState, FunctionComponent } from "react";

import { Container, Header, List } from "./components";
import { formatDate } from "./utils";

import { TodosService } from "./services";
import { TTodos } from './types';

import styles from "./index.module.css";

const App: FunctionComponent = () => {
  const [todos, setTodos] = useState<TTodos>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todosRes = await TodosService.getAllTodos();

      setTodos(todosRes.data);
    }

    try {
      fetchTodos();
    } catch (err) {
      console.error(err)
    }
  }, [])

  const removeTodo = async(id: number):Promise<any> => {
    try {
      const removeArr = todos.filter((todo) => todo.id !== id);
      
      setTodos(removeArr);
      await TodosService.deleteTodo(id);
    } catch (err) {
      console.error(err);
    } 
  };

  const addData = async(inputText:string):Promise<any> => {
    const inputData = {
      id: Math.round(Math.random()*10000+1),
      text: inputText,
      date: formatDate(new Date()),
    };

    await TodosService.addTodo(inputData);
    const todos = await TodosService.getAllTodos();

    setTodos(todos.data);
  };

  return (
    <Container>
      <Header addData={addData} />
      <div className={styles.listContainer}>
        <List data={todos} removeTodo={removeTodo} />
      </div>
    </Container>
  );
}

export default App;
