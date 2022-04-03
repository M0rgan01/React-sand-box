import { Redirect, RouteProps, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import { isAuthenticatedSelector } from '../../../store/selectors/authSelectors';
import CustomRoute from './CustomRoute';
import { ERROR } from './routes';

interface PrivateRouteProps extends RouteProps{
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

function PrivateRoute({ size, ...rest }: PrivateRouteProps) {
  const auth = useSelector(isAuthenticatedSelector);
  const location = useLocation();

  if (!auth) {
    return <Redirect to={ERROR} from={location.pathname} />;
  }
  return <CustomRoute size={size} {...rest} />;
}

export default PrivateRoute;
