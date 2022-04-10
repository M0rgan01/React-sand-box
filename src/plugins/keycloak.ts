import Keycloak from 'keycloak-js';
import { store } from '../store';
import { setKeycloakInstanceAction, setUserProfileAction, UpdateTokenAction } from '../store/actions/authActions';

const initOptions: Keycloak.KeycloakConfig = {
  url: process.env.REACT_APP_KEYCLOAK_AUTH_URL,
  realm: process.env.REACT_APP_KEYCLOAK_REALM || '',
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID || '',
};

export const keycloak = Keycloak(initOptions);
store.dispatch(setKeycloakInstanceAction(keycloak));

function initRefreshTokenInterval() {
  const refreshInterval = setInterval(() => {
    keycloak.updateToken(70).then((refreshed) => {
      if (process.env.NODE_ENV === 'development') {
        if (refreshed) {
          store.dispatch(UpdateTokenAction(keycloak.token));

          console.info(`Token refreshed ${refreshed}`);
        } else {
          console.warn(`Token not refreshed, valid for ${Math.round(keycloak.tokenParsed!.exp! + keycloak.timeSkew! - new Date().getTime() / 1000)} seconds`);
        }
      }
    }).catch(() => {
      console.error('Failed to refresh token');
      clearInterval(refreshInterval);
    });
  }, 6000);
}

export default function initKeycloak() {
  return new Promise<void>((resolve, reject) => {
    const silentCheckSsoRedirectUri = `${process.env.REACT_APP_KEYCLOAK_REDIRECT_URL}/${process.env.REACT_APP_KEYCLOAK_SILENT_SSO_FILE_NAME}`;
    keycloak.init({ onLoad: 'check-sso', silentCheckSsoRedirectUri }).then((auth) => {
      if (auth) {
        store.dispatch(setKeycloakInstanceAction(keycloak));
        keycloak.loadUserProfile().then((keycloakProfile) => {
          store.dispatch(setUserProfileAction(keycloakProfile));
          initRefreshTokenInterval();
        });
        resolve();
      } else {
        resolve();
      }
    }).catch(() => {
      console.error('Authenticated Failed');
      reject();
    });
  });
}
