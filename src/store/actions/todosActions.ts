import { DELETE_TODO_ACTION, SAVE_TODO_ACTION, SET_TODOS_ACTION } from '../reducer/todoReducer';
import Todo from '../../models/todo';

export const deleteTodoAction = (id: string) => ({
  type: DELETE_TODO_ACTION,
  payload: id,
});

export const setTodosAction = (todo: Todo) => ({
  type: SET_TODOS_ACTION,
  payload: todo,
});

export const saveTodoAction = (todo: Todo) => ({
  type: SAVE_TODO_ACTION,
  payload: todo,
});
