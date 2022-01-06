import { useLocation } from 'react-router';

export const ERROR = '/error';
export const FORBIDDEN = 'forbidden';
export const UNAUTHORIZED = 'unauthorized';
export const NOT_FOUND = 'not_found';
export const UNKNOWN = 'unknown';
export const ERROR_FORBIDDEN = ERROR + '?type=' + FORBIDDEN;
export const ERROR_UNAUTHORIZED = ERROR + '?type=' + UNAUTHORIZED;
export const ERROR_NOT_FOUND = ERROR + '?type=' + NOT_FOUND;
export const ERROR_UNKNOWN = ERROR + '?type=' + UNKNOWN;

export const TODOS = '/todos';
export const REACT_QUERY = '/react-query';
export const OVERLAY_MENU = '/overlay';
export const WELCOME = '/welcome';
export const MATTER_GAME = '/matter-game';
export const CHECKERS_GAME = '/checkers-game';

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}
