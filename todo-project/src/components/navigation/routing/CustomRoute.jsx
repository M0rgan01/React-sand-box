import { Route } from 'react-router-dom';
import React from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';

export function CustomRoute({size, ...rest}) {
  return <Container maxWidth={size ? size : 'md'}>
    <Route {...rest} />
  </Container>;
}

CustomRoute.propTypes = {
  size: PropTypes.string,
};