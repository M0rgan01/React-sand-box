import axios from 'axios';
import { isAuthenticatedSelector, realmSelector, tokenSelector } from '../store/selectors/authSelectors';
import { store } from '../store';
import history from './history';
import {
  ERROR_FORBIDDEN,
  ERROR_NOT_FOUND,
  ERROR_UNAUTHORIZED,
  ERROR_UNKNOWN,
} from '../components/navigation/routing/routes';

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

axiosInstance.interceptors.request.use((request) => {
  const storeState = store.getState();
  if (isAuthenticatedSelector(storeState)) {
    request.headers = {
      Authorization: `Bearer ${tokenSelector(storeState)}`,
      'X-Realm': realmSelector(storeState),
    };
  }
  return request;
}, (error) => Promise.reject(error));

axiosInstance.interceptors.response.use(undefined, (error) => {
  const { response } = error;
  if (!response) {
    history.push(ERROR_UNKNOWN);
  } else {
    const { status } = response;

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
      case 500:
      case 503:
      case 400:
      default:
        history.push(ERROR_UNKNOWN);
    }
  }
  return Promise.reject(error);
});

export default axiosInstance;
