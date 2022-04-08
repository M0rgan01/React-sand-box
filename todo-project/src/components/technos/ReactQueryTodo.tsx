import { Add, Book, Delete } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import List from '@material-ui/core/List';
import { grey } from '@material-ui/core/colors';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { v4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import ReactQueryService from '../../services/ReactQueryService';
import { ComponentTitle } from '../common/ComponentTitle';
import { LoadingButton } from '../common/LoadingButton';
import Todo from '../../models/todo';
import { setMainLoading } from '../../store/actions/mainInformationActions';

// https://www.youtube.com/watch?v=38wJmjeJNAk
function ReactQueryTodo() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const {
    register, handleSubmit, formState, reset,
  } = useForm({ mode: 'onChange' });
  const queryKey = ['fetchAll'];
  const {
    isLoading, isFetching, data, refetch,
  } = useQuery(queryKey, () => ReactQueryService.fetchTodos());
  const todos = data ? data.data : [];

  useEffect(() => {
    if (isLoading) {
      dispatch(setMainLoading(true));
    }
    dispatch(setMainLoading(false));
  }, [isLoading, dispatch]);

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
        {isLoading && <Box display="inline" ml={1}>Loading</Box>}
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
