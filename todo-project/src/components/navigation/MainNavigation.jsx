import React, { useCallback } from 'react';
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

export default function MainNavigation() {

  const login = useSelector(loginSelector);
  const logout = useSelector(logoutSelector);
  const profileUrl = useSelector(profileUrlSelector);
  const auth = useSelector(isAuthenticatedSelector);
  const logoutRedirectUri = process.env.REACT_APP_KEYCLOAK_REDIRECT_URL;

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

  return <Box display={'flex'} justifyContent={'center'} pt={6}>
    {auth ?
      <div>
        <Button startIcon={<Home/>}
                variant={'contained'}
                component={NavLink}
                onClick={event => animateBack(event, 'blue')}
                to={WELCOME}>
          Home
        </Button>
        <Box display={'inline'} ml={2}>
          <Button startIcon={<KeyboardBackspace/>}
                  variant={'contained'}
                  component={NavLink}
                  onClick={event => animateBack(event, 'red')}
                  to={TODOS}>
            Todos
          </Button>
        </Box>
        <Box display={'inline'} mx={2}>
          <Button startIcon={<AccountCircle/>}
                  onClick={onOpenProfile}
                  style={{ background: lightGreen[700], color: 'white' }}
                  variant={'contained'}>
            Account
          </Button>
        </Box>
        <Button startIcon={<ExitToApp/>}
                onClick={onLogout}
                style={{ background: red[700], color: 'white' }}
                variant={'contained'}>
          Logout
        </Button>
      </div>
      :
      <Button startIcon={<LockOpen/>}
              onClick={onLogin}
              style={{ background: lightGreen[700], color: 'white' }}
              variant={'contained'}>
        Login
      </Button>
    }
  </Box>;
}