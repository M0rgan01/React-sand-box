import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { useSelector } from 'react-redux';
import { todosSelector } from '../store/selectors/todosSelectors';
import { grey } from '@material-ui/core/colors';

export default function Todo() {

  const todos = useSelector(todosSelector);

  return <div>
    <List component="nav"
          style={{backgroundColor: grey[300], borderRadius: 5}}
          aria-label="main mailbox folders">
      {
        todos.map(todo =>
          <ListItem button dense key={todo.id}>
            <ListItemIcon>
              <Checkbox
                style={{ backgroundColor: 'transparent' }}
                edge="start"
                checked={todo.complete}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary={todo.title} />
          </ListItem>)
      }
    </List>
  </div>;
}