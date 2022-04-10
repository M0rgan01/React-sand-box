import React, { ReactElement, useState } from 'react';
import { Fade } from '@mui/material';
import { minCoverDuration } from '../../plugins/animeBackground';

interface CustomTransitionProps {
  children: ReactElement;
}

export default function CustomTransition({ children }: CustomTransitionProps) {
  const [delayTimeout, setDelayTimeout] = useState(false);

  setTimeout(() => {
    setDelayTimeout(true);
  }, minCoverDuration);

  return (
    <Fade in={delayTimeout}>
      { children }
    </Fade>
  );
}
