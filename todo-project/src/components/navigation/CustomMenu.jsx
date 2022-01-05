import React, { forwardRef, useState } from 'react';
import Menu from '@material-ui/core/Menu';

const menu = ((props, ref) => {
  return <Menu ref={ref}
               { ...props }
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
  />;
});

// https://fr.reactjs.org/docs/forwarding-refs.html
export const CustomMenu = forwardRef(menu);