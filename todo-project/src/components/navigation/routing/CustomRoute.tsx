import { Route, RouteProps } from 'react-router-dom';
import React from 'react';
import { Container } from '@material-ui/core';

interface CustomRouteProps extends RouteProps{
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

function CustomRoute(props: CustomRouteProps) {
  const { size } = props;
  return (
    <Container maxWidth={size || 'md'}>
      <Route {...props} />
    </Container>
  );
}

export default CustomRoute;
