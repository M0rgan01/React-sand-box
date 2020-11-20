import React from 'react';
import { Clock } from './components/Clock';
import { Context } from './components/Context';
import DeleteIcon from '@material-ui/icons/Delete';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { Button } from '@material-ui/core';
// @ts-ignore
import { Provider } from 'react-redux';
import store from './store';
import { TodoList } from './components/redux/StoredTodoList';
import { TodoFilterStore } from './components/redux/TodoFilter';
import { AddTodo } from './components/redux/AddTodo';

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Button startIcon={<DeleteIcon/>} component={Link} to="/" color="secondary" variant="contained">
              Test
            </Button>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/context">Context</Link>
              </li>
              <li>
                <Link to="/redux">Redux</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/">
                <Clock/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/dashboard">
                <Dashboard/>
              </Route>
              <Route path="/context">
                <Context/>
              </Route>
              <Route path="/redux">
                <TodoList />
                <TodoFilterStore />
                <AddTodo/>
              </Route>
            </Switch>
          </Router>
        </div>
      </Provider>
  );
}

function About() {
  return (
      <div>
        <h2>About</h2>
      </div>
  );
}

function Dashboard() {
  return (
      <div>
        <h2>Dashboard</h2>
      </div>
  );
}

export default App;
