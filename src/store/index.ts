import { combineReducers, createStore } from 'redux';
import { TodoReducer } from './reducer/todoReducer';
import { AuthReducer } from './reducer/authReducer';
import { MainInformationReducer } from './reducer/mainInformationReducer';

export const store = createStore(
  combineReducers({
    todos: TodoReducer,
    auth: AuthReducer,
    mainInformation: MainInformationReducer,
  }),
);

export type RootState = ReturnType<typeof store.getState>
