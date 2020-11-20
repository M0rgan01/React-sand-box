import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import { addTodoAction } from '../../store/todosActions';

export function AddTodo() {
  const dispatch = useDispatch();
  const input = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await dispatch(addTodoAction(input.current.value));
    setLoading(false);
    input.current.value = '';
    input.current.focus();
  }

  return <form onSubmit={handleSubmit}>
    <input type="text" placeholder={'tache'} ref={input}/>
    <button disabled={loading} type={'submit'}>{loading ? 'chargement...' : 'ajouter'}</button>
  </form>
}