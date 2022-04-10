import axiosInstance from '../plugins/axios';
import { TODOS } from '../plugins/urls';
import { Todo } from './model';

class ReactQueryService {
  static fetchTodos() {
    return axiosInstance.get<Todo[]>(TODOS);
  }

  static saveTodos(todo: Todo) {
    return axiosInstance.post<Todo>(TODOS, todo);
  }

  static deleteTodos(id: string) {
    return axiosInstance.delete(`${TODOS}/${id}`);
  }
}

export default ReactQueryService;
