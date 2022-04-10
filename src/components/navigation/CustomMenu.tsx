import React, { forwardRef } from 'react';
import { Menu, MenuProps } from '@mui/material';

const menu = ((props: MenuProps, ref: any) => (
  <Menu
    ref={ref}
    {...props}
    keepMounted
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
  />
));

// https://fr.reactjs.org/docs/forwarding-refs.html
const CustomMenu = forwardRef(menu);

export default CustomMenu;
