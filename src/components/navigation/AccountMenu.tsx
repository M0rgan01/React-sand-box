import { useSelector } from 'react-redux';
import {
  Box, Divider, IconButton, ListItem, ListItemIcon, ListItemText, Menu, Typography,
} from '@mui/material';
import { AccountBox, ExitToApp } from '@mui/icons-material';
import React, { MouseEvent, useCallback, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { logoutSelector, profileUrlSelector, userEmailSelector } from '../../store/selectors/authSelectors';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const logout = useSelector(logoutSelector);
  const userEmail = useSelector(userEmailSelector);
  const profileUrl = useSelector(profileUrlSelector);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = useCallback(() => {
    logout({ redirectUri: process.env.REACT_APP_KEYCLOAK_REDIRECT_URL });
  }, [logout]);

  const onOpenProfile = useCallback(() => {
    window.open(
profileUrl!,
'_blank',
    );
  }, [profileUrl]);

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AccountCircleIcon sx={{ color: 'white' }} />
      </IconButton>
      <Menu
        sx={{ marginTop: '10px' }}
        id="account-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        onClose={handleClose}
      >
        <Box textAlign="center">
          <Typography variant="body2">
            Logged in as
          </Typography>
          <Typography
            p={1}
            fontWeight="bold"
            variant="body2"
          >
            {userEmail}
          </Typography>
        </Box>
        <Box mb={1}>
          <Divider />
        </Box>
        <ListItem dense button onClick={onOpenProfile}>
          <ListItemIcon>
            <AccountBox fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="My account" />
        </ListItem>
        <ListItem dense button onClick={onLogout}>
          <ListItemIcon>
            <ExitToApp fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </Menu>
    </div>
  );
}
