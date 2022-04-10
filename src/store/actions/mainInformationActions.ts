import { UPDATE_OVERLAY_STATE } from '../reducer/mainInformationReducer';

// eslint-disable-next-line
export const setOverlayState = (isOpen: boolean) => ({
  type: UPDATE_OVERLAY_STATE,
  payload: isOpen,
});
