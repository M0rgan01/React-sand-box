import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { todosSelector } from '../store/selectors/todosSelectors';
import { grey } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';
import { Add, Delete } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import { LoadingButton } from './common/LoadingButton';
import Box from '@material-ui/core/Box';
import { addTodoAction, deleteTodoAction, toggleTodoAction } from '../store/actions/todosActions';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';

export default function Todo() {

  const { register, handleSubmit, formState, reset } = useForm({ mode: 'onChange' });
  const todos = useSelector(todosSelector);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onCreate = async (data) => {
    setLoading(true);
    dispatch(addTodoAction(data.title));
    reset();
    setLoading(false);
  };

  const onEdit = async (data) => {
    setLoading(true);
    dispatch(toggleTodoAction(data));
    reset();
    setLoading(false);
  };

  const onDelete = async (id) => {
    setLoading(true);
    dispatch(deleteTodoAction(id));
    setLoading(false);
  };

  return <div>
    <List component="nav"
          style={{ backgroundColor: grey[300], borderRadius: 5, padding: '10px' }}
          aria-label="main mailbox folders">
      {todos.map(todo =>
        <div key={todo.id}>
          <ListItem>
            <ListItemIcon>
              <Checkbox
                edge="start"
                onClick={() => onEdit(todo)}
                checked={todo.complete}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary={todo.title}/>
            <ListItemSecondaryAction>
              <IconButton edge="end"
                          onClick={() => onDelete(todo.id)}
                          aria-label="comments">
                <Delete style={{ color: red[500] }}/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider variant="middle"/>
        </div>)
      }
      <ListItem>
        <ListItemIcon>
          <Add/>
        </ListItemIcon>
        <ListItemText>
          <form onSubmit={handleSubmit(onCreate)}>
            <Box display={'flex'} alignItems={'center'}>
              <TextField
                fullWidth
                variant="standard"
                margin="normal"
                inputRef={register({ required: true })}
                label='Todo'
                placeholder={'Example: Add todo'}
                name="title"
                autoFocus
              />
              <Box ml={2}>
                <LoadingButton icon={<Add/>}
                               color={'primary'}
                               disable={!formState.isValid || loading}
                               loading={loading}
                               text={'add'}/>
              </Box>
            </Box>
          </form>
        </ListItemText>
      </ListItem>
    </List>
  </div>;
}