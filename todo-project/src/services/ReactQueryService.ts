import axiosInstance from '../plugins/axios';
import {TODOS} from '../plugins/urls';
import {Todo} from './model';

export class ReactQueryService {

  async fetchTodos() {
    return await axiosInstance.get(TODOS);
  }

  async saveTodos(todo: Todo) {
    return await axiosInstance.post(TODOS, todo);
  }

  async deleteTodos(id: string) {
    return await axiosInstance.delete(TODOS + '/' + id);
  }

}