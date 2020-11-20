import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filteredTodosSelector } from '../../store/todosSelectors';
import { deleteTodoAction, toggleTodoAction } from '../../store/todosActions';

function TodoItem ({todo, onToggle, onDelete}) {
  return <li>
    <label>
      <input type="checkbox" checked={todo.complete} onChange={() => onToggle(todo)}/>
      {todo.title}
    </label>
    <button onClick={() => onDelete(todo)}>x</button>
  </li>
}

export function TodoList() {
  // utilisation de redux avec les hooks
  const todos = useSelector(filteredTodosSelector);
  const dispatch = useDispatch();
  const onToggle = useCallback((todo) => {
    dispatch(toggleTodoAction(todo))
  }, []);

  const onDelete = useCallback((todo) => {
    dispatch(deleteTodoAction(todo))
  }, []);

  return <ul>
    {todos.map(todo => <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} key={todo.id}/>)}
  </ul>
}


// https://www.youtube.com/watch?v=QLiox52HG4U

// utilisation de redux sans les hooks
/*
export const TodoListStore = connect(
    (state) => ({
      todos: todosSelector(state)
    }),
    (dispatch) => ({
      onToggle: todo => dispatch(toggleTodoAction(todo))
    })
)(TodoList)*/
