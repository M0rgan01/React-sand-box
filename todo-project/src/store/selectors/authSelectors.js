// auth process
export const keycloakSelector = ({auth}) => auth.keycloakInstance;
export const isAuthenticatedSelector = ({auth}) => auth.keycloakInstance.authenticated || false;
export const userEmailSelector = ({auth}) => auth.userProfile.email;
export const userFirstNameSelector = ({auth}) => auth.userProfile.firstName;
export const userLastNameSelector = ({auth}) => auth.userProfile.lastName;
export const userFullNameSelector = ({auth}) => {
  return `${auth.userProfile.firstName} ${auth.userProfile.lastName}`;
};
export const userIdSelector = ({auth}) => auth.keycloakInstance.subject;
export const loginSelector = ({auth}) => auth.keycloakInstance.login;
export const logoutSelector = ({auth}) => auth.keycloakInstance.logout;
export const profileUrlSelector = ({auth}) => {
  if (auth.keycloakInstance.authenticated) {
    const authData = auth.keycloakInstance.tokenParsed;
    return `${authData.iss}/account?referrer=${authData.azp}`;
  } else {
    return null;
  }

};
export const tokenSelector = ({auth}) => auth.keycloakInstance.token;
export const realmSelector = ({auth}) => auth.keycloakInstance.realm;