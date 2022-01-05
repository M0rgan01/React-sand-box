import React, { forwardRef } from 'react';
import Menu from '@material-ui/core/Menu';

const menu = ((props, ref) => {
  return <Menu ref={ref} {...props} />;
});

// https://fr.reactjs.org/docs/forwarding-refs.html
export const MuiMenu = forwardRef(menu);