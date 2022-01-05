import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { CustomMenu } from './CustomMenu';
import MenuItem from '@material-ui/core/MenuItem';
import { CustomLink } from './routing/CustomLink';
import { CHECKERS_GAME, MATTER_GAME } from './routing/routes';
import { KeyboardBackspace } from '@material-ui/icons';
import { amber } from '@material-ui/core/colors';

export default function GamesMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <div>
        <Button startIcon={<KeyboardBackspace/>}
                variant={'contained'}
                style={{ background: amber[700], color: 'white' }}
                onClick={handleClick}>
          Games
        </Button>
        <CustomMenu
            id="games-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
          <CustomLink to={MATTER_GAME} component={
            <MenuItem onClick={handleClose}>Matter.js</MenuItem>
          }>
          </CustomLink>
          <CustomLink to={CHECKERS_GAME} component={
            <MenuItem onClick={handleClose}>Checkers</MenuItem>
          }>
          </CustomLink>
        </CustomMenu>
      </div>
  );
}