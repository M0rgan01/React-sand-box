import React, { ReactNode, useState } from 'react';
import { Fade } from '@mui/material';
import { minCoverDuration } from '../../plugins/animeBackground';

interface CustomTransitionProps {
  children: ReactNode;
}

export default function CustomTransition({ children }: CustomTransitionProps) {
  const [delayTimeout, setDelayTimeout] = useState(false);

  setTimeout(() => {
    setDelayTimeout(true);
  }, minCoverDuration);

  return (
    <Fade in={delayTimeout}>
      <div>
        { children }
      </div>
    </Fade>
  );
}
