import React from 'react';
import { Variant } from '@mui/material/styles/createTypography';
import { Box, Typography } from '@mui/material';

interface ComponentTitleProps {
  title: string;
  icon: React.ReactNode;
  variant?: Variant | 'inherit',
  marginBottom?: number,
}

export function ComponentTitle({
  icon, variant, marginBottom, title = "Coucou, c'est le titre par défaut",
}: ComponentTitleProps) {
  return (
    <Box
      mb={marginBottom || 3}
      alignItems="center"
      display="flex"
    >
      {
      icon && (
      <Box display="inline" mr={1}>
        {icon}
      </Box>
      )
    }
      <Typography variant={variant || 'h3'}>
        {title}
      </Typography>
    </Box>
  );
}

export default ComponentTitle;
