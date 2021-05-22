import SafeService from './SafeService';
import axiosInstance from '../plugins/axios';
import { TODO, TODOS } from '../plugins/urls';
import store from '../store';
import { deleteTodoAction, saveTodoAction, setTodosAction } from '../store/actions/todosActions';
import { Todo } from './model';

export class Service extends SafeService {

  async fetchTodos(callBack?: () => void): Promise<void> {
    await this.safeCall(async () => {
      const todos = (await axiosInstance.get(TODOS)).data;
      store.dispatch(setTodosAction(todos));
    }, callBack);
  }

  async saveTodos(todo: Todo, callBack?: () => void): Promise<void> {
    await this.safeCall(async () => {
      await axiosInstance.post(TODO, todo);
      store.dispatch(saveTodoAction(todo));
    }, callBack);
  }

  async deleteTodos(id: string, callBack?: () => void): Promise<void> {
    await this.safeCall(async () => {
      await axiosInstance.delete(TODO + '/' + id);
      store.dispatch(deleteTodoAction(id));
    }, callBack);
  }

}