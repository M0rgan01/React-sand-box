import React from 'react';
import {
  Box, IconButton, Link, Typography,
} from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { backgroundZIndex } from '../../plugins/animeBackground';

const exitButtonClass: SxProps<Theme> = {
  position: 'absolute',
  top: 20,
  right: 20,
  zIndex: backgroundZIndex + 1,
  color: 'white',
};

const overlayClass: SxProps<Theme> = {
  position: 'absolute',
  zIndex: backgroundZIndex + 1,
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  animation: 'overlayTransition 500ms ease-in',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@keyframes overlayTransition': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
};

interface OverlayProps {
  hideOverlay: () => void;
}

function Overlay({ hideOverlay }: OverlayProps) {
  return (
    <Box sx={overlayClass}>
      <Typography sx={{ display: 'flex', flexDirection: 'column' }}>
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
        sx={exitButtonClass}
        size="large"
        aria-label="close-menu"
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
}

export default Overlay;
