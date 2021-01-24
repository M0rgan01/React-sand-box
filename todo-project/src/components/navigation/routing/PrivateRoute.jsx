import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthenticatedSelector } from '../../../store/selectors/authSelectors';
import React from 'react';
import { useLocation } from 'react-router';
import { CustomRoute } from './CustomRoute';
import PropTypes from 'prop-types';
import { FORBIDDEN } from './routes';

export function PrivateRoute({size, notMaster, ...rest}) {

  const auth = useSelector(isAuthenticatedSelector);
  const location = useLocation();

  if (!auth) {
    return <Redirect to={FORBIDDEN} from={location.pathname}/>;
  } else {
    return <CustomRoute size={size} {...rest} />;
  }
}

PrivateRoute.propTypes = {
  size: PropTypes.string,
  notMaster: PropTypes.bool,
};