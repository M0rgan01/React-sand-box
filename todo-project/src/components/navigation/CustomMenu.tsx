import React, { forwardRef } from 'react';
import Menu from '@material-ui/core/Menu';
import { MenuProps } from '@material-ui/core/Menu/Menu';

const menu = ((props: MenuProps, ref: any) => (
  <Menu
    ref={ref}
    {...props}
    keepMounted
    getContentAnchorEl={null}
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
