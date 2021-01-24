export const KEYCLOAK = 'KEYCLOAK';
export const USER_PROFILE = 'USER_PROFILE';

export function AuthReducer (state = null, action) {
  switch (action.type) {
    case KEYCLOAK:
      return { ...state, keycloakInstance: action.payload };
    case USER_PROFILE:
      return { ...state, userProfile: action.payload };
    default:
      return state;
  }
}