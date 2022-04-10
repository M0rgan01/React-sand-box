import {
  AppBar as AppBarMui, Button, IconButton, Slide, Toolbar, Typography, useScrollTrigger,
} from '@mui/material';
import React, { MutableRefObject, useCallback } from 'react';
import { SxProps, Theme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { LockOpen, Menu } from '@mui/icons-material';
import { isAuthenticatedSelector, loginSelector } from '../../store/selectors/authSelectors';
import AccountMenu from './AccountMenu';

const appBarClass: SxProps<Theme> = {
  boxShadow: '0px 15px 10px -15px #111',
};

interface AppBarProps {
  appBarRef: MutableRefObject<any>,
}

function AppBar({ appBarRef }: AppBarProps) {
  const trigger = useScrollTrigger();
  const login = useSelector(loginSelector);
  const auth = useSelector(isAuthenticatedSelector);
  const onLogin = useCallback(() => {
    login();
  }, [login]);

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBarMui sx={appBarClass}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <Menu />
            </IconButton>
            <Typography>
              React-sand-box
            </Typography>
            {
              auth
                ? <AccountMenu />
                : (
                  <Button
                    startIcon={<LockOpen />}
                    onClick={onLogin}
                    color="success"
                    variant="contained"
                  >
                    Login
                  </Button>
                )

            }
          </Toolbar>
        </AppBarMui>
      </Slide>
      <Toolbar ref={appBarRef} />
    </>
  );
}

export default AppBar;
