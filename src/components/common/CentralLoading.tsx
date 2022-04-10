import React from 'react';
import { Box } from '@mui/material';

export default function CentralLoading() {
  return (
    <Box
      minHeight="100vh"
      minWidth="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      top={0}
      left={0}
    >
      <div className="loading" />
    </Box>
  );
}
