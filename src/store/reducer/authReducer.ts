import { AnyAction } from 'redux';
import Keycloak from 'keycloak-js';

export const KEYCLOAK = 'KEYCLOAK';
export const USER_PROFILE = 'USER_PROFILE';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';

interface AuthState {
  keycloakInstance?: Keycloak.KeycloakInstance;
  userProfile?: Keycloak.KeycloakProfile;
}

const initialState: AuthState = {
  keycloakInstance: undefined,
  userProfile: undefined,
};

export const initialAction: AnyAction = {
  type: undefined,
};

export function AuthReducer(state = initialState, action = initialAction) {
  switch (action.type) {
    case UPDATE_TOKEN:
      return { ...state, keycloakInstance: { ...state?.keycloakInstance, token: action.payload } };
    case KEYCLOAK:
      return { ...state, keycloakInstance: action.payload };
    case USER_PROFILE:
      return { ...state, userProfile: action.payload };
    default:
      return state;
  }
}
