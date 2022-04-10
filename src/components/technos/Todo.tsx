import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { v4 } from 'uuid';
import {
  Box,
  Checkbox,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText, TextField,
} from '@mui/material';
import { grey, red } from '@mui/material/colors';
import { Add, Delete } from '@mui/icons-material';
import TodoService from '../../services/TodoService';
import { LoadingButton } from '../common/LoadingButton';
import todosSelector from '../../store/selectors/todosSelectors';
import TodoModel from '../../models/todo';
import CentralLoading from '../common/CentralLoading';

export default function Todo() {
  const {
    register, handleSubmit, formState, reset,
  } = useForm({ mode: 'onChange' });
  const todos = useSelector(todosSelector) || [];
  const [fetchLoading, setFetchLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  const service = useMemo(() => new TodoService(), []);

  useEffect(() => {
    service.fetchTodos().then(() => setFetchLoading(false));
  }, [service]);

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

  if (fetchLoading) {
    return <CentralLoading />;
  }

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
