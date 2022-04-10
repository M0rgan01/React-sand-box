import Keycloak from 'keycloak-js';
import { KEYCLOAK, UPDATE_TOKEN, USER_PROFILE } from '../reducer/authReducer';

export const setKeycloakInstanceAction = (keycloakInstance: Keycloak.KeycloakInstance) => ({
  type: KEYCLOAK,
  payload: keycloakInstance,
});

export const UpdateTokenAction = (token?: string) => ({
  type: UPDATE_TOKEN,
  payload: token,
});

export const setUserProfileAction = (userProfile: Keycloak.KeycloakProfile) => ({
  type: USER_PROFILE,
  payload: userProfile,
});
