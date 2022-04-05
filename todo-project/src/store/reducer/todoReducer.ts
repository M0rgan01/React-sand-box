import Todo from '../../models/todo';
import { initialAction } from './authReducer';

export const SET_TODOS_ACTION = 'SET_TODOS_ACTION';
export const SAVE_TODO_ACTION = 'SAVE_TODO_ACTION';
export const DELETE_TODO_ACTION = 'DELETE_TODO_ACTION';

export function TodoReducer(state: Todo[] = [], action = initialAction) {
  const { type, payload } = action;

  switch (type) {
    case SET_TODOS_ACTION:
      return payload || null;
    case SAVE_TODO_ACTION:
      if (state.map((value) => value.id).includes(payload.id)) {
        return state.map((value) => {
          if (value.id === payload.id) {
            return { ...value, ...payload };
          }
          return value;
        });
      }
      return [...state, payload];
    case DELETE_TODO_ACTION:
      return state.filter((value) => value.id !== payload);
    default:
      return state;
  }
}
