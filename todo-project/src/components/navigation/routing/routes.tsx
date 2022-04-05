import { Navigate, useLocation } from 'react-router-dom';
import React, { ReactElement } from 'react';
import Welcome from '../../Welcome';
import Error from '../Error';
import Todo from '../../technos/Todo';
import ReactQueryTodo from '../../technos/ReactQueryTodo';
import OverlayMenu from '../../technos/OverlayMenu';
import MatterGame from '../../games/MatterGame';
import CheckersGame from '../../games/CheckersGame';

export const ERROR = '/error';
export const FORBIDDEN = 'forbidden';
export const UNAUTHORIZED = 'unauthorized';
export const NOT_FOUND = 'not_found';
export const UNKNOWN = 'unknown';
export const ERROR_FORBIDDEN = `${ERROR}?type=${FORBIDDEN}`;
export const ERROR_UNAUTHORIZED = `${ERROR}?type=${UNAUTHORIZED}`;
export const ERROR_NOT_FOUND = `${ERROR}?type=${NOT_FOUND}`;
export const ERROR_UNKNOWN = `${ERROR}?type=${UNKNOWN}`;

export const TODOS = '/todos';
export const REACT_QUERY = '/react-query';
export const OVERLAY_MENU = '/overlay';
export const WELCOME = '/welcome';
export const MATTER_GAME = '/matter-game';
export const CHECKERS_GAME = '/checkers-game';

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

interface RouteItem {
  route: string,
  title: string,
  isPrivate?: boolean;
  element: ReactElement;
}

export const routesItems: RouteItem[] = [
  {
    title: 'Index Redirect',
    route: '/',
    element: <Navigate to={WELCOME} />,
  },
  {
    title: 'Index',
    route: WELCOME,
    element: <Welcome />,
  },
  {
    title: 'Error',
    route: ERROR,
    element: <Error />,
  },
  {
    title: 'Todos',
    route: TODOS,
    element: <Todo />,
    isPrivate: true,
  },
  {
    title: 'Todos react query',
    route: REACT_QUERY,
    element: <ReactQueryTodo />,
    isPrivate: true,
  },
  {
    title: 'Overlay menu',
    route: OVERLAY_MENU,
    element: <OverlayMenu />,
    isPrivate: true,
  },
  {
    title: 'Matter game',
    route: MATTER_GAME,
    element: <MatterGame />,
    isPrivate: true,
  },
  {
    title: 'Checkers Game',
    route: CHECKERS_GAME,
    element: <CheckersGame />,
    isPrivate: true,
  },
  {
    title: 'Error 404',
    route: '*',
    element: <Error />,
  },
];
