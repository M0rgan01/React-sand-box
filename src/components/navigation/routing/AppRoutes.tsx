import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { routesItems } from './routes';
import PrivateRoute from './PrivateRoute';
import TransitionPage from '../../common/TransitionPage';

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
                  <TransitionPage>
                    {route.element}
                  </TransitionPage>
)}
              />
            </Route>
          )
          : (
            <Route
              key={route.route}
              path={route.route}
              element={(
                <TransitionPage>
                  {route.element}
                </TransitionPage>
)}
            />
          )
      ))}
    </Routes>
  );
}

export default AppRoutes;
