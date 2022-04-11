import React from 'react';
import {
  Box, IconButton, Link, Typography,
} from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const overlayClass: SxProps<Theme> = {
  position: 'absolute',
  zIndex: '1102',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

interface OverlayProps {
  hideOverlay: () => void;
}

function Overlay({ hideOverlay }: OverlayProps) {
  return (
    <>
      <Typography sx={overlayClass}>
        <Link onClick={hideOverlay}>
          <span role="img" aria-label="about us">💁🏻‍♂️</span>
          About us
        </Link>
        <Link onClick={hideOverlay}>
          <span role="img" aria-label="price">💸</span>
          Pricing
        </Link>
        <Link onClick={hideOverlay}>
          <span role="img" aria-label="contact">📩</span>
          Contact
        </Link>
      </Typography>
      <IconButton
        onClick={hideOverlay}
        sx={{
          position: 'absolute', top: 20, right: 20, zIndex: '1102', color: 'white',
        }}
        size="large"
        aria-label="close-menu"
      >
        <CloseIcon />
      </IconButton>
    </>
  );
}

export default Overlay;
