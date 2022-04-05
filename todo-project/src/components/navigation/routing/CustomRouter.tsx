/* eslint-disable react/jsx-props-no-spreading */
import { BrowserHistory } from 'history';
import React, { ReactElement, useLayoutEffect, useState } from 'react';
import { Router } from 'react-router-dom';

interface CustomRouterProp {
  history: BrowserHistory;
  children: ReactElement;
}

function CustomRouter({ history, ...props } : CustomRouterProp) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      location={state.location}
      navigationType={state.action}
      {...props}
      navigator={history}
    />
  );
}

export default CustomRouter;
