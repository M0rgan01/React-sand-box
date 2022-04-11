import {
  AppBar as AppBarMui, Button, IconButton, Slide, Toolbar, Typography, useScrollTrigger,
} from '@mui/material';
import React, { MutableRefObject, useCallback, useState } from 'react';
import { SxProps, Theme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { LockOpen, Menu } from '@mui/icons-material';
import { isAuthenticatedSelector, loginSelector } from '../../store/selectors/authSelectors';
import AccountMenu from './AccountMenu';
import { clickPosition, hideOverlay, showOverlay } from '../../plugins/animeBackground';
import Overlay from './Overlay';

const appBarClass: SxProps<Theme> = {
  boxShadow: '0px 15px 10px -15px #111',
};

interface AppBarProps {
  appBarRef: MutableRefObject<any>,
}

function AppBar({ appBarRef }: AppBarProps) {
  const trigger = useScrollTrigger();
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const login = useSelector(loginSelector);
  const auth = useSelector(isAuthenticatedSelector);
  const onLogin = useCallback(() => {
    login();
  }, [login]);

  const openOverlay = (event: React.MouseEvent) => {
    clickPosition(event);
    showOverlay({ complete: () => setOverlayOpen(true) });
  };

  const closeOverlay = () => {
    hideOverlay();
    setOverlayOpen(false);
  };

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBarMui sx={appBarClass}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <IconButton
              onClick={openOverlay}
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
      { isOverlayOpen && <Overlay hideOverlay={closeOverlay} />}
    </>
  );
}

export default AppBar;
