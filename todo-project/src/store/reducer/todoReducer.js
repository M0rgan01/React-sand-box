export const SET_TODOS_ACTION = 'SET_TODOS_ACTION';
export const SAVE_TODO_ACTION = 'SAVE_TODO_ACTION';
export const DELETE_TODO_ACTION = 'DELETE_TODO_ACTION';

export function TodoReducer (state = null, action) {
  switch (action.type) {
    case SET_TODOS_ACTION:
      return action.payload ? action.payload : null;
    case SAVE_TODO_ACTION:
      if (state.map(value => value.id).includes(action.payload.id)) {
        return state.map(value => {
          if (value.id === action.payload.id) {
            return {...value, ...action.payload};
          } else {
            return value;
          }
        });
      } else {
        return [...state, action.payload];
      }
    case DELETE_TODO_ACTION:
      return state.filter(value => value.id !== action.payload);
    default:
      return state;
  }
}