import { AnyAction } from 'redux';

export const SET_LOADING = 'SET_LOADING';

interface MainInformationReducerState {
  loading: boolean;
}

const initialState: MainInformationReducerState = {
  loading: false,
};

export const initialAction: AnyAction = {
  type: undefined,
};

export function MainInformationReducer(state = initialState, action = initialAction) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
