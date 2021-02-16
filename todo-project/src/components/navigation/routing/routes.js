import { useLocation } from 'react-router';

export const ERROR = '/error';
export const ERROR_FORBIDDEN = ERROR + '?type=forbidden';
export const ERROR_UNAUTHORIZED = ERROR + '?type=unauthorized';
export const ERROR_NOT_FOUND = ERROR + '?type=not_found';
export const ERROR_UNKNOWN = ERROR + '?type=unknown';
export const TODOS = '/todos';
export const WELCOME = '/welcome';

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}
