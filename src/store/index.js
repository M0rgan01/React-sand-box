import { applyMiddleware, combineReducers, createStore } from 'redux';
import { TodoReducer } from './todoReducer';
import { FilterReducer } from './filterReducer';
import thunk from 'redux-thunk';

const store = createStore(
    combineReducers({
      todos: TodoReducer,
      filter: FilterReducer,
    }), applyMiddleware(thunk));

export default store;