import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { CustomMenu } from './CustomMenu';
import MenuItem from '@material-ui/core/MenuItem';
import { CustomLink } from './routing/CustomLink';
import { TODOS } from './routing/routes';
import { KeyboardBackspace } from '@material-ui/icons';
import lightBlue from '@material-ui/core/colors/lightBlue';

export default function TechnosMenu() {
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
              style={{ background: lightBlue[700], color: 'white' }}
              onClick={handleClick}>
        Technos
      </Button>
      <CustomMenu
        id="technos-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <CustomLink to={TODOS} component={
          <MenuItem onClick={handleClose}>Todos API</MenuItem>
        }>
        </CustomLink>
      </CustomMenu>
    </div>
  );
}