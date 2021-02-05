import SafeService from './SafeService';
import axiosInstance from '../plugins/axios';
import { TODO, TODOS } from '../plugins/urls';
import store from '../store';
import { addTodoAction, setTodosAction } from '../store/actions/todosActions';
import { v4 } from 'uuid';

export class Service extends SafeService {

  async fetchTodos(callBack?: () => void): Promise<void> {
    await this.safeCall(async () => {
      const todos = (await axiosInstance.get(TODOS)).data;
      store.dispatch(setTodosAction(todos));
    }, callBack);
  }

  async postTodos(title: string, callBack?: () => void): Promise<void> {
    await this.safeCall(async () => {
      const todo = { title, id: v4() };
      await axiosInstance.post(TODO, todo);
      store.dispatch(addTodoAction(todo));
    }, callBack);
  }

}