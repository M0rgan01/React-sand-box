import React, { useCallback, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { AccountCircle, ExitToApp, Home, KeyboardBackspace, LockOpen } from '@material-ui/icons';
import { TODOS, WELCOME } from './routing/routes';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import {
  isAuthenticatedSelector,
  loginSelector,
  logoutSelector,
  profileUrlSelector,
} from '../../store/selectors/authSelectors';
import { lightGreen, red } from '@material-ui/core/colors';
import { animateBack } from '../../plugins/animeBackground';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { Slide } from '@material-ui/core';

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

  throw new Error('e');

  return <Slide direction="right" in={true} mountOnEnter>
    <Box position="fixed" top="0" width="100%" id="header">
      <Box display={'flex'} justifyContent={'center'} pt={3} flexWrap={'wrap'}>
        {auth ?
          <>
            <Box display={'inline'} m={1}>
              <Button startIcon={<Home/>}
                      variant={'contained'}
                      component={NavLink}
                      onClick={event => animateBack(event, 'blue')}
                      to={WELCOME}>
                Home
              </Button>
            </Box>
            <Box display={'inline'} m={1}>
              <Button startIcon={<KeyboardBackspace/>}
                      variant={'contained'}
                      component={NavLink}
                      style={{ background: lightBlue[700], color: 'white' }}
                      onClick={event => animateBack(event, 'red')}
                      to={TODOS}>
                Todos
              </Button>
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