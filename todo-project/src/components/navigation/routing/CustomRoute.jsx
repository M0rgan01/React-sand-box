import { Route } from 'react-router-dom';
import React from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import Fade from '@material-ui/core/Fade';

export function CustomRoute({size, ...rest}) {

  return <Fade in={true} timeout={1000}>
    <Container maxWidth={size ? size : 'md'}>
      <Route {...rest} />
    </Container>
  </Fade>;
}

CustomRoute.propTypes = {
  size: PropTypes.string,
};