import React, { useCallback, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import {
  AccountCircle, ExitToApp, Home, LockOpen,
} from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import { lightGreen, red } from '@material-ui/core/colors';
import { Slide } from '@material-ui/core';
import {
  isAuthenticatedSelector,
  loginSelector,
  logoutSelector,
  profileUrlSelector,
} from '../../store/selectors/authSelectors';
import { WELCOME } from './routing/routes';
import CustomLink from './routing/CustomLink';
import GamesMenu from './GamesMenu';
import TechnosMenu from './TechnosMenu';

function resizeHeader() {
  const header = document.getElementById('header');
  const headerBottom = document.getElementById('header-bottom');
  const headerHeight = header!.clientHeight;
  headerBottom!.style.paddingTop = `${headerHeight + 30}px`;
}

export default function MainNavigation() {
  const login = useSelector(loginSelector);
  const logout = useSelector(logoutSelector);
  const profileUrl = useSelector(profileUrlSelector);
  const auth = useSelector(isAuthenticatedSelector);
  const logoutRedirectUri = process.env.REACT_APP_KEYCLOAK_REDIRECT_URL;

  useEffect(() => {
    resizeHeader();
    window.addEventListener('resize', resizeHeader);
  }, []);

  const onLogin = useCallback(() => {
    login();
  }, [login]);

  const onOpenProfile = useCallback(() => {
    window.open(
profileUrl!,
'_blank',
    );
  }, [profileUrl]);

  const onLogout = useCallback(() => {
    logout({ redirectUri: logoutRedirectUri });
  }, [logout, logoutRedirectUri]);

  return (
    <Slide direction="right" in mountOnEnter>
      <Box position="fixed" top="0" width="100%" id="header">
        <Box display="flex" justifyContent="center" pt={3} flexWrap="wrap">
          {auth
            ? (
              <>
                <Box display="inline" m={1}>
                  <CustomLink
                    to={WELCOME}
                    component={(
                      <Button
                        startIcon={<Home />}
                        variant="contained"
                      >
                        Home
                      </Button>
              )}
                  />
                </Box>
                <Box display="inline" m={1}>
                  <GamesMenu />
                </Box>
                <Box display="inline" m={1}>
                  <TechnosMenu />
                </Box>
                <Box display="inline" m={1}>
                  <Button
                    startIcon={<AccountCircle />}
                    onClick={onOpenProfile}
                    style={{ background: lightGreen[700], color: 'white' }}
                    variant="contained"
                  >
                    Account
                  </Button>
                </Box>
                <Box display="inline" m={1}>
                  <Button
                    startIcon={<ExitToApp />}
                    onClick={onLogout}
                    style={{ background: red[700], color: 'white' }}
                    variant="contained"
                  >
                    Logout
                  </Button>
                </Box>
              </>
            )
            : (
              <Box display="inline" m={1}>
                <Button
                  startIcon={<LockOpen />}
                  onClick={onLogin}
                  color="primary"
                  variant="contained"
                >
                  Login
                </Button>
              </Box>
            )}
        </Box>
      </Box>
    </Slide>
  );
}
