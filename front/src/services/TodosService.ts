import axios from 'axios';

import { ITodo } from '../interfaces';
import { TTodos } from '../types';
import { API_URL } from '../constants/apiURL';

const { TODOS: TODOS_API } = API_URL;

export class TodosService {
	static addTodo(todo: ITodo) {
		return axios.post<ITodo>(TODOS_API, todo);
	}	

	static getAllTodos() {
		return axios.get<TTodos>(TODOS_API);
	}

	static deleteTodo(id: number) {
		return axios.delete(API_URL.TODO_BY_ID(id));
	}
}
