import { ADD_TODO_ACTION, DELETE_TODO_ACTION, SET_TODOS_ACTION, UPDATE_TODO_ACTION } from '../reducer/todoReducer';

export const toggleTodoAction = (todo) => ({
  type: UPDATE_TODO_ACTION,
  payload: {...todo, complete: !todo.complete},
});

export const deleteTodoAction = (id) => ({
  type: DELETE_TODO_ACTION,
  payload: id,
});

export const setTodosAction = (todos) => ({
  type: SET_TODOS_ACTION,
  payload: todos,
});

// without async call
export const addTodoAction = (title) => ({
  type: ADD_TODO_ACTION,
  payload: title,
});

// with async call (redux-thunk)
export const addAsyncTodoAction = (title) =>
   async (dispatch) => {
   await wait(2000);
   dispatch({
     type: ADD_TODO_ACTION,
     payload: title,
   });
};