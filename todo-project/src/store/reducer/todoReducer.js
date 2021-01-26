
export const SET_TODOS_ACTION = 'SET_TODOS_ACTION';
export const ADD_TODO_ACTION = 'ADD_TODO_ACTION';
export const UPDATE_TODO_ACTION = 'UPDATE_TODO_ACTION';
export const DELETE_TODO_ACTION = 'DELETE_TODO_ACTION';

export function TodoReducer (state = null, action) {
  switch (action.type) {
    case SET_TODOS_ACTION:
      return action.payload ? action.payload : null;
    case ADD_TODO_ACTION:
      return [...state, action.payload];
    case UPDATE_TODO_ACTION:
      return state.map(value => {
        if (value.id === action.payload.id) {
          return {...value, ...action.payload};
        } else {
          return value;
        }
      });
    case DELETE_TODO_ACTION:
      return state.filter(value => value.id !== action.payload);
    default:
      return state;
  }
}