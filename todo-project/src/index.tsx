import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MuiThemeProvider } from '@material-ui/core';
import App from './App';
import ErrorCatching from './components/ErrorCatching';
import reportWebVitals from './reportWebVitals';
import store from './store';
import './app.css';
import muiTheme from './plugins/material-ui';

const queryClient = new QueryClient();

ReactDOM.render(
  <div>
    <canvas id="backgroundAnimate" />
    <Provider store={store}>
      <MuiThemeProvider theme={muiTheme}>
        <QueryClientProvider client={queryClient}>
          <ErrorCatching>
            <div id="app">
              <App />
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
