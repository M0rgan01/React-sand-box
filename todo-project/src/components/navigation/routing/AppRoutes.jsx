import { Redirect, Switch } from 'react-router-dom';
import React from 'react';
import { ERROR, GAME, TODOS, WELCOME } from './routes';
import Error from '../Error';
import Todo from '../../Todo';
import Welcome from '../../Welcome';
import { CustomRoute } from './CustomRoute';
import { PrivateRoute } from './PrivateRoute';
import Game from '../../Game';

export function AppRoutes() {

  return <Switch>

    <CustomRoute exact path='/'>
      <Redirect to={ WELCOME }/>
    </CustomRoute>

    <CustomRoute component={ Welcome } path={ WELCOME }/>

    <CustomRoute component={ Error } path={ ERROR }/>

    <PrivateRoute component={ Todo } path={ TODOS }/>

    <PrivateRoute component={ Game } path={ GAME }/>

    <CustomRoute path='*' component={ Error }/>

  </Switch>;
}