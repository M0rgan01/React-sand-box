import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { KeyboardBackspace } from '@material-ui/icons';
import lightBlue from '@material-ui/core/colors/lightBlue';
import CustomMenu from './CustomMenu';
import CustomLink from './routing/CustomLink';
import { OVERLAY_MENU, REACT_QUERY, TODOS } from './routing/routes';

export default function TechnosMenu() {
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined);

  const handleClick = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(undefined);
  };

  return (
    <div>
      <Button
        startIcon={<KeyboardBackspace />}
        variant="contained"
        style={{ background: lightBlue[700], color: 'white' }}
        onClick={handleClick}
      >
        Technos
      </Button>
      <CustomMenu
        id="technos-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <CustomLink
          to={TODOS}
          component={
            <MenuItem onClick={handleClose}>Todos API</MenuItem>
        }
        />
        <CustomLink
          to={REACT_QUERY}
          component={
            <MenuItem onClick={handleClose}>React query</MenuItem>
        }
        />
        <CustomLink
          to={OVERLAY_MENU}
          component={
            <MenuItem onClick={handleClose}>Custom overlay</MenuItem>
        }
        />
      </CustomMenu>
    </div>
  );
}
