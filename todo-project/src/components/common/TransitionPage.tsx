import React, { useEffect, useState } from 'react';
import { Fade } from '@material-ui/core';
import { hideOverlay, minCoverDuration, Overlay } from '../../plugins/animeBackground';
import CentralLoading from './CentralLoading';

interface TransitionPageProps {
  loading?: boolean;
  disable?: boolean;
  children: React.ReactNode;
}

export function TransitionPage({ children, loading, disable }: TransitionPageProps) {
  const [delayTimeout, setDelayTimeout] = useState(false);

  useEffect(() => {
    if (!loading && Overlay.open && !disable) {
      hideOverlay();
    }
  }, [loading, Overlay.open, disable]);

  if (!loading) {
    setTimeout(() => {
      setDelayTimeout(true);
    }, minCoverDuration);
  }

  if (loading) {
    return <CentralLoading />;
  }
  return (
    <Fade in={delayTimeout}>
      <div>
        { children }
      </div>
    </Fade>
  );
}

export default TransitionPage;
