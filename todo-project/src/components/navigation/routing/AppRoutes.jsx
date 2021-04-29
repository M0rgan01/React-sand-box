import { Redirect, Switch } from 'react-router-dom';
import React from 'react';
import { ERROR, TODOS, WELCOME } from './routes';
import Error from '../Error';
import Todo from '../../Todo';
import Welcome from '../../Welcome';
import { CustomRoute } from './CustomRoute';
import { PrivateRoute } from './PrivateRoute';

export function AppRoutes() {

  return <Switch>

    <CustomRoute exact path='/'>
      <Redirect to={ WELCOME }/>
    </CustomRoute>

    <CustomRoute component={ Welcome } path={ WELCOME }/>

    <CustomRoute component={ Error } path={ ERROR }/>

    <PrivateRoute component={ Todo } path={ TODOS }/>

    <CustomRoute path='*' component={ Error }/>

  </Switch>;
}