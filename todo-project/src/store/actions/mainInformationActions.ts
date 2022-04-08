import { SET_LOADING } from '../reducer/mainInformationReducer';

// eslint-disable-next-line
export const setMainLoading = (loading: boolean) => ({
  type: SET_LOADING,
  payload: loading,
});
