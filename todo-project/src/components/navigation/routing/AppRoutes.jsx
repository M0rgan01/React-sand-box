import { Redirect, Switch } from 'react-router-dom';
import React from 'react';
import { FORBIDDEN, TODOS, WELCOME } from './routes';
import Forbidden from '../Forbidden';
import FourOFour from '../FourOFour';
import Todo from '../../Todo';
import Welcome from '../../Welcome';
import { CustomRoute } from './CustomRoute';
import { PrivateRoute } from './PrivateRoute';

export function AppRoutes() {
  return <Switch>

    <CustomRoute exact path='/'>
      <Redirect to={WELCOME}/>
    </CustomRoute>
    
    <CustomRoute component={Welcome} path={WELCOME}/>

    <CustomRoute component={Forbidden} path={FORBIDDEN}/>

    <PrivateRoute component={Todo} path={TODOS}/>

    <CustomRoute path="*" component={FourOFour}/>

  </Switch>;
}