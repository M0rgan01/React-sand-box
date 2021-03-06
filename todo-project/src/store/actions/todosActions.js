import { DELETE_TODO_ACTION, SAVE_TODO_ACTION, SET_TODOS_ACTION } from '../reducer/todoReducer';

export const deleteTodoAction = (id) => ({
  type: DELETE_TODO_ACTION,
  payload: id,
});

export const setTodosAction = (todos) => ({
  type: SET_TODOS_ACTION,
  payload: todos,
});

// without async call
export const saveTodoAction = (todo) => ({
  type: SAVE_TODO_ACTION,
  payload: todo,
});

// with async call (redux-thunk)
export const addAsyncTodoAction = (title) =>
   async (dispatch) => {
   await wait(2000);
   dispatch({
     type: SAVE_TODO_ACTION,
     payload: title,
   });
};