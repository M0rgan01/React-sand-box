import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { routesItems } from './routes';
import PrivateRoute from './PrivateRoute';
import CustomTransition from '../CustomTransition';

function AppRoutes() {
  return (
    <Routes>
      { routesItems.map((route) => (
        route.isPrivate
          ? (
            <Route key={route.route} element={<PrivateRoute />}>
              <Route
                path={route.route}
                element={(
                  <CustomTransition title={route.title}>
                    {route.element}
                  </CustomTransition>
                )}
              />
            </Route>
          )
          : (
            <Route
              key={route.route}
              path={route.route}
              element={(
                <CustomTransition title={route.title}>
                  {route.element}
                </CustomTransition>
              )}
            />
          )
      ))}
    </Routes>
  );
}

export default AppRoutes;
