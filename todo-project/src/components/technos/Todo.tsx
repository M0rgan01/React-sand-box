import React, { useEffect, useMemo, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { grey } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';
import { Add, Delete } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import Box from '@material-ui/core/Box';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import { v4 } from 'uuid';
import TodoService from '../../services/TodoService';
import { LoadingButton } from '../common/LoadingButton';
import todosSelector from '../../store/selectors/todosSelectors';
import TodoModel from '../../models/todo';
import { setMainLoading } from '../../store/actions/mainInformationActions';

export default function Todo() {
  const {
    register, handleSubmit, formState, reset,
  } = useForm({ mode: 'onChange' });
  const todos = useSelector(todosSelector) || [];
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const service = useMemo(() => new TodoService(), []);

  useEffect(() => {
    dispatch(setMainLoading(true));
    service.fetchTodos().then(() => dispatch(setMainLoading(false)));
  }, [service, dispatch]);

  const onCreate = async (todo: TodoModel) => {
    setLoading(true);
    await service.saveTodos({ id: v4(), title: todo.title, complete: false });
    reset();
    setLoading(false);
  };

  const onEdit = async (todo: TodoModel) => {
    setLoading(true);
    await service.saveTodos(todo);
    reset();
    setLoading(false);
  };

  const onDelete = async (id: string) => {
    setLoading(true);
    await service.deleteTodos(id);
    setLoading(false);
  };

  return (
    <List
      component="nav"
      style={{ backgroundColor: grey[300], borderRadius: 5, padding: '10px' }}
      aria-label="main mailbox folders"
    >
      { todos.map((todo: TodoModel) => (
        <div key={todo.id}>
          <ListItem>
            <ListItemIcon>
              <Checkbox
                edge="start"
                onClick={() => onEdit({ ...todo, complete: !todo.complete })}
                checked={todo.complete}
                name="complete"
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary={todo.title} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                onClick={() => onDelete(todo.id)}
                aria-label="comments"
              >
                <Delete style={{ color: red[500] }} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider variant="middle" />
        </div>
      ))}
      <ListItem>
        <ListItemIcon>
          <Add />
        </ListItemIcon>
        <ListItemText>
          <form onSubmit={handleSubmit(onCreate)}>
            <Box display="flex" alignItems="center">
              <TextField
                fullWidth
                variant="standard"
                margin="normal"
                inputRef={register({ required: true })}
                label="Todo"
                placeholder="Example: Add todo"
                name="title"
                autoFocus
              />
              <Box ml={2}>
                <LoadingButton
                  icon={<Add />}
                  color="primary"
                  disabled={!formState.isValid || loading}
                  loading={loading}
                  buttonText="add"
                />
              </Box>
            </Box>
          </form>
        </ListItemText>
      </ListItem>
    </List>
  );
}
