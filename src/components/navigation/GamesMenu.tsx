import React, { useState } from 'react';
import { Button, MenuItem } from '@mui/material';
import { amber } from '@mui/material/colors';
import { KeyboardBackspace } from '@mui/icons-material';
import CustomMenu from './CustomMenu';
import CustomLink from './routing/CustomLink';
import { CHECKERS_GAME, MATTER_GAME } from './routing/routes';

export default function GamesMenu() {
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined);

  const handleClick = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(undefined);
  };

  return (
    <>
      <Button
        startIcon={<KeyboardBackspace />}
        variant="contained"
        style={{ background: amber[700], color: 'white' }}
        onClick={handleClick}
      >
        Games
      </Button>
      <CustomMenu
        id="games-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <CustomLink
          to={MATTER_GAME}
          component={
            <MenuItem onClick={handleClose}>Matter.js</MenuItem>
          }
        />
        <CustomLink
          to={CHECKERS_GAME}
          component={
            <MenuItem onClick={handleClose}>Checkers</MenuItem>
          }
        />
      </CustomMenu>
    </>
  );
}
