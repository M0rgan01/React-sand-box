import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { CustomLink } from './routing/CustomLink';
import { GAME } from './routing/routes';
import { KeyboardBackspace } from '@material-ui/icons';
import { amber } from '@material-ui/core/colors';

export default function CompleteMenu() {
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
          Complete
        </Button>
        <Menu
            id="complete-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
        >
          <CustomLink to={GAME} component={
            <MenuItem onClick={handleClose}>Matter.js</MenuItem>
          }>
          </CustomLink>
        </Menu>
      </div>
  );
}