export const todosSelector = ({ todos }) => todos;

export const filteredTodosSelector = ({ todos, filter }) => {
  if (filter === null) {
    return todos;
  }
  return todos.filter((todo) => todo.complete === filter);
};
