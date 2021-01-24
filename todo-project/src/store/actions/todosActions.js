import { ADD_TODO_ACTION, DELETE_TODO_ACTION, UPDATE_TODO_ACTION } from '../reducer/todoReducer';
import wait from './wait';

export const toggleTodoAction = (todo) => ({
  type: UPDATE_TODO_ACTION,
  payload: {...todo, complete: !todo.complete}
})

export const deleteTodoAction = (todo) => ({
  type: DELETE_TODO_ACTION,
  payload: todo.id
})

// without async call
/*
export const addTodoAction = (title) => ({
  type: ADD_TODO_ACTION,
  payload: title
})*/

// with async call (redux-thunk)
export const addTodoAction = (title) =>
   async (dispatch) => {
   await wait(2000);
   dispatch({
     type: ADD_TODO_ACTION,
     payload: title
   });
}