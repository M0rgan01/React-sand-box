import SafeService from './SafeService';
import axiosInstance from '../plugins/axios';
import { TODOS } from '../plugins/urls';
import { store } from '../store';
import { deleteTodoAction, saveTodoAction, setTodosAction } from '../store/actions/todosActions';
import { Todo } from './model';

class TodoService extends SafeService {
  async fetchTodos(callBack?: () => void): Promise<void> {
    await this.safeCall(async () => {
      const todos = (await axiosInstance.get(TODOS)).data;
      store.dispatch(setTodosAction(todos));
    }, callBack);
  }

  async saveTodos(todo: Todo, callBack?: () => void): Promise<void> {
    await this.safeCall(async () => {
      await axiosInstance.post(TODOS, todo);
      store.dispatch(saveTodoAction(todo));
    }, callBack);
  }

  async deleteTodos(id: string, callBack?: () => void): Promise<void> {
    await this.safeCall(async () => {
      await axiosInstance.delete(`${TODOS}/${id}`);
      store.dispatch(deleteTodoAction(id));
    }, callBack);
  }
}

export default TodoService;
