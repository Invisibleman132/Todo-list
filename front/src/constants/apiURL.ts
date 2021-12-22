const BASE_URL = 'http://localhost:5000';

const BASE_TODOS_URL = `${BASE_URL}/todos`;
export const API_URL = {
	TODOS: BASE_TODOS_URL,
	TODO_BY_ID: (id: number) => `${BASE_TODOS_URL}/${id}`,
};
