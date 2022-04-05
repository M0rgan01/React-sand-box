import { combineReducers, createStore } from 'redux';
import { TodoReducer } from './reducer/todoReducer';
import { AuthReducer } from './reducer/authReducer';

export const store = createStore(
  combineReducers({
    todos: TodoReducer,
    auth: AuthReducer,
  }),
);

export type RootState = ReturnType<typeof store.getState>
