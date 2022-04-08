import React, { useEffect, useState } from 'react';
import { Fade } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { hideOverlay, minCoverDuration, Overlay } from '../../plugins/animeBackground';
import CentralLoading from './CentralLoading';
import { mainLoadingSelector } from '../../store/selectors/mainInformationSelectors';

interface TransitionPageProps {
  disable?: boolean;
  children: React.ReactElement;
}

export function TransitionPage({ children, disable }: TransitionPageProps) {
  const [delayTimeout, setDelayTimeout] = useState(false);
  const loading = useSelector(mainLoadingSelector);
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
      { children }
    </Fade>
  );
}

export default TransitionPage;
