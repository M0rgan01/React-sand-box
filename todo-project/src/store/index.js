import { combineReducers, createStore } from 'redux';
import { TodoReducer } from './reducer/todoReducer';
import { AuthReducer } from './reducer/authReducer';

const store = createStore(
  combineReducers({
    todos: TodoReducer,
    auth: AuthReducer,
  }),
);

export default store;
