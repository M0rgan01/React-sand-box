import SafeService from './SafeService';
import axiosInstance from '../plugins/axios';
import { TODOS } from '../plugins/urls';
import store from '../store';
import { setTodosAction } from '../store/actions/todosActions';

export class Service extends SafeService {

  async fetchTodos(callBack?: () => void): Promise<void> {
    await this.safeCall(async () => {
      const todos = (await axiosInstance.get(TODOS)).data;
      store.dispatch(setTodosAction(todos));
    }, callBack);
  }
}