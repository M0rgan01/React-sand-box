import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { routesItems } from './routes';
import PrivateRoute from './PrivateRoute';

function AppRoutes() {
  return (
    <Routes>
      { routesItems.map((route) => (
        route.isPrivate
          ? (
            <Route key={route.route} element={<PrivateRoute />}>
              <Route
                path={route.route}
                element={route.element}
              />
            </Route>
          )
          : (
            <Route
              key={route.route}
              path={route.route}
              element={route.element}
            />
          )
      ))}
    </Routes>
  );
}

export default AppRoutes;
