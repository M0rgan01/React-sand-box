import { KEYCLOAK, USER_PROFILE } from '../reducer/authReducer';

export const setKeycloakInstanceAction = (keycloakInstance) => ({
  type: KEYCLOAK,
  payload: {...keycloakInstance},
});

export const setUserProfileAction = (userProfile) => ({
  type: USER_PROFILE,
  payload: {...userProfile},
});