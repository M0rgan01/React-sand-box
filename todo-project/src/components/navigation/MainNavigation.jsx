import React, { useCallback, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { AccountCircle, ExitToApp, Home, KeyboardBackspace, LockOpen } from '@material-ui/icons';
import { GAME, TODOS, WELCOME } from './routing/routes';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import {
  isAuthenticatedSelector,
  loginSelector,
  logoutSelector,
  profileUrlSelector,
} from '../../store/selectors/authSelectors';
import { lightGreen, red } from '@material-ui/core/colors';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { Slide } from '@material-ui/core';
import { CustomLink } from './routing/CustomLink';
import CompleteMenu from './CompleteMenu';

function resizeHeader() {
  const header = document.getElementById('header');
  const headerBottom = document.getElementById('header-bottom');
  const headerHeight = header.clientHeight;
  headerBottom.style.paddingTop = (headerHeight + 30) + 'px';
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
  }, []);

  const onOpenProfile = useCallback(() => {
    window.open(profileUrl,
      '_blank',
    );
  }, []);

  const onLogout = useCallback(() => {
    logout({ redirectUri: logoutRedirectUri });
  }, []);

  return <Slide direction="right" in={true} mountOnEnter>
    <Box position="fixed" top="0" width="100%" id="header">
      <Box display={'flex'} justifyContent={'center'} pt={3} flexWrap={'wrap'}>
        {auth ?
          <>
            <Box display={'inline'} m={1}>
              <CustomLink to={WELCOME} component={
                <Button startIcon={<Home/>}
                        variant={'contained'}>
                  Home
                </Button>
              }>
              </CustomLink>
            </Box>
            <Box display={'inline'} m={1}>
              <CompleteMenu />
            </Box>
            <Box display={'inline'} m={1}>
              <CustomLink to={TODOS} component={
                <Button startIcon={<KeyboardBackspace/>}
                        variant={'contained'}
                        style={{ background: lightBlue[700], color: 'white' }}>
                  Todos
                </Button>
              }>
              </CustomLink>
            </Box>
            <Box display={'inline'} m={1}>
              <Button startIcon={<AccountCircle/>}
                      onClick={onOpenProfile}
                      style={{ background: lightGreen[700], color: 'white' }}
                      variant={'contained'}>
                Account
              </Button>
            </Box>
            <Box display={'inline'} m={1}>
              <Button startIcon={<ExitToApp/>}
                      onClick={onLogout}
                      style={{ background: red[700], color: 'white' }}
                      variant={'contained'}>
                Logout
              </Button>
            </Box>
          </>
          :
          <Box display={'inline'} m={1}>
            <Button startIcon={<LockOpen/>}
                    onClick={onLogin}
                    style={{ background: lightGreen[700], color: 'white' }}
                    variant={'contained'}>
              Login
            </Button>
          </Box>
        }
      </Box>
    </Box>
  </Slide>;
}