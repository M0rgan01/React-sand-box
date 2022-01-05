import axios from 'axios';
import { isAuthenticatedSelector, realmSelector, tokenSelector } from '../store/selectors/authSelectors';
import { BACKEND_URL } from './urls';
import store from '../store/index';
import history from './history';
import {
  ERROR_FORBIDDEN,
  ERROR_NOT_FOUND,
  ERROR_UNAUTHORIZED,
  ERROR_UNKNOWN,
} from '../components/navigation/routing/routes';

const axiosInstance = axios.create({ baseURL: BACKEND_URL });

axiosInstance.interceptors.request.use(function (request) {
  const storeState = store.getState();
  if (isAuthenticatedSelector(storeState)) {
    request.headers.common = {
      Authorization: `Bearer ${tokenSelector(storeState)}`,
      'X-Realm': realmSelector(storeState),
    };
  }
  return request;
}, function (error) {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(undefined, function (error) {
  const response = error.response;
  if (!response) {
    history.push(ERROR_UNKNOWN);
  } else {
    const status = response.status;

    switch (status) {
      case 409:
        break;
      case 404:
        history.push(ERROR_NOT_FOUND);
        break;
      case 401:
        history.push(ERROR_UNAUTHORIZED);
        break;
      case 403:
        history.push(ERROR_FORBIDDEN);
        break;
      default:
      case 500:
      case 503:
      case 400:
        history.push(ERROR_UNKNOWN);
    }
  }
  return Promise.reject(error);
});

export default axiosInstance;