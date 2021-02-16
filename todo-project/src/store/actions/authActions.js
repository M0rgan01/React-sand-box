import { KEYCLOAK, UPDATE_TOKEN, USER_PROFILE } from '../reducer/authReducer';

export const setKeycloakInstanceAction = (keycloakInstance) => ({
  type: KEYCLOAK,
  payload: {...keycloakInstance},
});

export const UpdateTokenAction = (token) => ({
  type: UPDATE_TOKEN,
  payload: token,
});

export const setUserProfileAction = (userProfile) => ({
  type: USER_PROFILE,
  payload: {...userProfile},
});