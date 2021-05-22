import React, { useEffect, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { useSelector } from 'react-redux';
import { todosSelector } from '../store/selectors/todosSelectors';
import { grey } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';
import { Add, Delete } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import { LoadingButton } from './common/LoadingButton';
import Box from '@material-ui/core/Box';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import { Service } from '../services/Service';
import { TransitionPage } from './common/TransitionPage';
import { v4 } from 'uuid';

export default function Todo() {

  const service = new Service();
  const { register, handleSubmit, formState, reset } = useForm({ mode: 'onChange' });
  const todos = useSelector(todosSelector) || [];
  const [transitionLoading, setTransitionLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    service.fetchTodos().then(() => setTransitionLoading(false));
  }, []);

  const onCreate = async (todo) => {
    setLoading(true);
    await service.saveTodos({ id: v4(), title: todo.title, complete: false });
    reset();
    setLoading(false);
  };

  const onEdit = async (todo) => {
    setLoading(true);
    await service.saveTodos(todo);
    reset();
    setLoading(false);
  };

  const onDelete = async (id) => {
    setLoading(true);
    await service.deleteTodos(id);
    setLoading(false);
  };

  return <TransitionPage loading={ transitionLoading }>
    <List component="nav"
          style={ { backgroundColor: grey[300], borderRadius: 5, padding: '10px' } }
          aria-label="main mailbox folders">
      { todos.map(todo =>
          <div key={ todo.id }>
            <ListItem>
              <ListItemIcon>
                <Checkbox
                    edge="start"
                    onClick={ () => onEdit({...todo, complete: !todo.complete}) }
                    checked={ todo.complete }
                    name="complete"
                    tabIndex={ -1 }
                    disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={ todo.title }/>
              <ListItemSecondaryAction>
                <IconButton edge="end"
                            onClick={ () => onDelete(todo.id) }
                            aria-label="comments">
                  <Delete style={ { color: red[500] } }/>
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
          <form onSubmit={ handleSubmit(onCreate) }>
            <Box display={ 'flex' } alignItems={ 'center' }>
              <TextField
                  fullWidth
                  variant="standard"
                  margin="normal"
                  inputRef={ register({ required: true }) }
                  label="Todo"
                  placeholder={ 'Example: Add todo' }
                  name="title"
                  autoFocus
              />
              <Box ml={ 2 }>
                <LoadingButton icon={ <Add/> }
                               color={ 'primary' }
                               disable={ !formState.isValid || loading }
                               loading={ loading }
                               text={ 'add' }/>
              </Box>
            </Box>
          </form>
        </ListItemText>
      </ListItem>
    </List>
  </TransitionPage>;
}