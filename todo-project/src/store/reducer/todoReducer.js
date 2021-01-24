
const initialState = [
  {
    id: 1,
    title: 'Title1',
    complete: false,
  },
  {
    id: 2,
    title: 'Title2',
    complete: true,
  },
  {
    id: 3,
    title: 'Title3',
    complete: true,
  },
  {
    id: 4,
    title: 'Title4',
    complete: false,
  },
  {
    id: 5,
    title: 'Title5',
    complete: true,
  },
  {
    id: 6,
    title: 'Title6',
    complete: false,
  },
];

let id = initialState.length + 1;

export const ADD_TODO_ACTION = 'ADD_TODO_ACTION';
export const UPDATE_TODO_ACTION = 'UPDATE_TODO_ACTION';
export const DELETE_TODO_ACTION = 'DELETE_TODO_ACTION';

export function TodoReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, {id: ++id, complete: false, title: action.payload}];
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