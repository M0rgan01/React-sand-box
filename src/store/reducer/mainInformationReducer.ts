import { AnyAction } from 'redux';

export const UPDATE_OVERLAY_STATE = 'UPDATE_OVERLAY_STATE';

interface MainInformationReducerState {
  isOverlayOpen: boolean;
}

const initialState: MainInformationReducerState = {
  isOverlayOpen: false,
};

export const initialAction: AnyAction = {
  type: undefined,
};

export function MainInformationReducer(state = initialState, action = initialAction) {
  switch (action.type) {
    case UPDATE_OVERLAY_STATE:
      return { ...state, isOverlayOpen: action.payload };
    default:
      return state;
  }
}
