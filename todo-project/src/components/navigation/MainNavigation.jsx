import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { ExitToApp, KeyboardBackspace, LockOpen } from '@material-ui/icons';
import { TODOS } from './routing/routes';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import { isAuthenticatedSelector, loginSelector, logoutSelector } from '../../store/selectors/authSelectors';
import { red, lightGreen } from '@material-ui/core/colors';

export default function MainNavigation() {

  const login = useSelector(loginSelector);
  const logout = useSelector(logoutSelector);
  const auth = useSelector(isAuthenticatedSelector);
  const logoutRedirectUri = process.env.REACT_APP_KEYCLOAK_REDIRECT_URL;

  const onLogin = useCallback(() => {
    login();
  }, []);

  const onLogout = useCallback(() => {
    logout({redirectUri: logoutRedirectUri});
  }, []);

  return <Box display={'flex'} justifyContent={'center'}>
    { auth ?
      <div>
        <Button startIcon={<KeyboardBackspace/>}
                variant={'contained'}
                style={{marginRight: 10}}
                component={NavLink}
                to={TODOS}>
          Todos
        </Button>
        <Button startIcon={<ExitToApp/>}
                onClick={onLogout}
                style={{background: red[700], color: 'white'}}
                variant={'contained'}>
          Logout
        </Button>
      </div>
      :
      <Button startIcon={<LockOpen/>}
              onClick={onLogin}
              style={{background: lightGreen[700], color: 'white'}}
              variant={'contained'}>
        Login
      </Button>
    }
  </Box>;
}