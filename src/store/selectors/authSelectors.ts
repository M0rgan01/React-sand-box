import { RootState } from '../index';

// auth process
export const keycloakSelector = ({ auth }: RootState) => auth.keycloakInstance;
export const isAuthenticatedSelector = (
  { auth }: RootState,
) => auth.keycloakInstance?.authenticated || false;
export const userEmailSelector = ({ auth }: RootState) => auth.userProfile?.email;
export const userFirstNameSelector = ({ auth }: RootState) => auth.userProfile?.firstName;
export const userLastNameSelector = ({ auth }: RootState) => auth.userProfile?.lastName;
export const userFullNameSelector = ({
  auth,
}: RootState) => `${auth.userProfile?.firstName} ${auth.userProfile?.lastName}`;
export const userIdSelector = ({ auth }: RootState) => auth.keycloakInstance?.subject;
export const loginSelector = ({ auth }: RootState) => auth.keycloakInstance?.login;
export const logoutSelector = ({ auth }: RootState) => auth.keycloakInstance?.logout;
export const profileUrlSelector = ({ auth }: RootState) => {
  if (auth.keycloakInstance?.authenticated) {
    const authData = auth.keycloakInstance?.tokenParsed;
    return `${authData.iss}/account?referrer=${authData.azp}`;
  }
  return null;
};
export const tokenSelector = ({ auth }: RootState) => auth.keycloakInstance?.token;
export const realmSelector = ({ auth }: RootState) => auth.keycloakInstance?.realm;
