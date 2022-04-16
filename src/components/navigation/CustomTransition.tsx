import React, { ReactNode, useState } from 'react';
import { Fade } from '@mui/material';
import { minCoverDuration } from '../../plugins/animeBackground';
import useDocumentTitle from '../../hooks/setDocumentTitle';

interface CustomTransitionProps {
  title: string;
  children: ReactNode;
}

export default function CustomTransition({ children, title }: CustomTransitionProps) {
  const [delayTimeout, setDelayTimeout] = useState(false);
  useDocumentTitle(title);
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
