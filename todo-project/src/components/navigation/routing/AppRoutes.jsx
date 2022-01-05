import { Redirect, Switch } from 'react-router-dom';
import React from 'react';
import { CHECKERS_GAME, ERROR, MATTER_GAME, REACT_QUERY, TODOS, WELCOME } from './routes';
import Error from '../Error';
import Todo from '../../technos/Todo';
import Welcome from '../../Welcome';
import { CustomRoute } from './CustomRoute';
import { PrivateRoute } from './PrivateRoute';
import MatterGame from '../../games/MatterGame';
import CheckersGame from '../../games/CheckersGame';
import { ReactQueryTodo } from '../../technos/React-query-todo';

export function AppRoutes() {

  return <Switch>

    <CustomRoute exact path='/'>
      <Redirect to={ WELCOME }/>
    </CustomRoute>

    <CustomRoute component={ Welcome } path={ WELCOME }/>

    <CustomRoute component={ Error } path={ ERROR }/>

    <PrivateRoute component={ Todo } path={ TODOS }/>

    <PrivateRoute component={ ReactQueryTodo } path={ REACT_QUERY }/>

    <PrivateRoute component={ MatterGame } path={ MATTER_GAME }/>

    <PrivateRoute component={ CheckersGame } path={ CHECKERS_GAME }/>

    <CustomRoute path='*' component={ Error }/>

  </Switch>;
}