import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material';
import App from './App';
import ErrorCatching from './components/ErrorCatching';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import './app.css';
import muiTheme from './plugins/material-ui';
import CustomRouter from './components/navigation/routing/CustomRouter';
import history from './plugins/history';

const queryClient = new QueryClient();

ReactDOM.render(
  <CustomRouter history={history}>
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <QueryClientProvider client={queryClient}>
          <ErrorCatching>
            <div id="app">
              <canvas id="backgroundAnimate" />
              <App />
            </div>
          </ErrorCatching>
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  </CustomRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
