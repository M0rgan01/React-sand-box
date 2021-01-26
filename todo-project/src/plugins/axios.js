import axios from 'axios';
import { isAuthenticatedSelector, realmSelector, tokenSelector } from '../store/selectors/authSelectors';
import { BACKEND_URL } from './urls';
import store from '../store/index';

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

export default axiosInstance;