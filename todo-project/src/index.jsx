import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorCatching from './components/ErrorCatching';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import './app.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MuiThemeProvider } from '@material-ui/core';
import muiTheme from './plugins/material-ui';

const queryCLient = new QueryClient();

ReactDOM.render(
  <div>
    <canvas id="backgroundAnimate"/>
    <Provider store={store}>
      <MuiThemeProvider theme={muiTheme}>
        <QueryClientProvider client={queryCLient}>
          <ErrorCatching>
            <div id="app">
              <App/>
            </div>
          </ErrorCatching>
        </QueryClientProvider>
      </MuiThemeProvider>
    </Provider>
  </div>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
