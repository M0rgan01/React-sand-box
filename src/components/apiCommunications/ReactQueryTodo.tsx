import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { v4 } from 'uuid';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button, Checkbox,
  Divider,
  IconButton, List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText, TextField,
} from '@mui/material';
import { Add, Book, Delete } from '@mui/icons-material';
import { grey, red } from '@mui/material/colors';
import ReactQueryService from '../../services/ReactQueryService';
import { ComponentTitle } from '../common/ComponentTitle';
import { LoadingButton } from '../common/LoadingButton';
import Todo from '../../models/todo';
import CentralLoading from '../common/CentralLoading';

// https://www.youtube.com/watch?v=38wJmjeJNAk
function ReactQueryTodo() {
  const queryClient = useQueryClient();
  const {
    register, handleSubmit, formState, reset,
  } = useForm({ mode: 'onChange' });
  const queryKey = ['fetchAll'];
  const {
    isLoading: fetchLoading, isFetching, data, refetch,
  } = useQuery(queryKey, () => ReactQueryService.fetchTodos());
  const todos: Todo[] = data ? data.data : [];

  const { mutate: onCreate, isLoading: createLoading } = useMutation(
    async (todo: Todo) => {
      reset();
      await ReactQueryService.saveTodos({ id: v4(), title: todo.title, complete: false });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(queryKey),
    },
  );

  const { mutate: onEdit, isLoading: updateLoading } = useMutation(
    async (todo: Todo) => {
      reset();
      await ReactQueryService.saveTodos(todo);
    },
    {
      onSuccess: () => queryClient.invalidateQueries(queryKey),
    },
  );

  const { mutate: onDelete, isLoading: deleteLoading } = useMutation(
    async (id: string) => {
      reset();
      await ReactQueryService.deleteTodos(id);
    },
    {
      onSuccess: () => queryClient.invalidateQueries(queryKey),
    },
  );

  if (fetchLoading) {
    return <CentralLoading />;
  }

  const editLoading = createLoading || updateLoading || deleteLoading;
  return (
    <>
      <ComponentTitle title="React-query demonstration" icon={<Book fontSize="large" />} />
      <Box mb={1}>
        <Button
          variant="contained"
          onClick={() => refetch()}
        >
          Forcer le refetch
        </Button>

        {isFetching && <Box display="inline" ml={1}>Fetching</Box>}
        {fetchLoading && <Box display="inline" ml={1}>Loading</Box>}
      </Box>

      <List
        component="nav"
        style={{ backgroundColor: grey[300], borderRadius: 5, padding: '10px' }}
        aria-label="main mailbox folders"
      >
        {todos.map((todo) => (
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
            <form onSubmit={handleSubmit(() => onCreate)}>
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
                    disabled={!formState.isValid || editLoading}
                    loading={editLoading}
                    buttonText="add"
                  />
                </Box>
              </Box>
            </form>
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
}

export default ReactQueryTodo;
