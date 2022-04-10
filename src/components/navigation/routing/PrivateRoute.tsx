import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import { isAuthenticatedSelector } from '../../../store/selectors/authSelectors';
import { ERROR } from './routes';

function PrivateRoute() {
  const auth = useSelector(isAuthenticatedSelector);
  return auth ? <Outlet /> : <Navigate to={ERROR} />;
}

export default PrivateRoute;
