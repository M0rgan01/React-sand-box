import React, { useEffect, useState } from 'react';
import { Fade } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { hideOverlay, minCoverDuration } from '../../plugins/animeBackground';
import { isOverlayOpenSelector } from '../../store/selectors/mainInformationSelectors';
import { setOverlayState } from '../../store/actions/mainInformationActions';

interface TransitionPageProps {
  children: React.ReactNode;
}

export function TransitionPage({ children }: TransitionPageProps) {
  const isOverlayOpen = useSelector(isOverlayOpenSelector);
  const [delayTimeout, setDelayTimeout] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOverlayOpen) {
      hideOverlay({ complete: () => dispatch(setOverlayState(false)) });
      setTimeout(() => {
        setDelayTimeout(true);
      }, minCoverDuration);
    }
  }, [isOverlayOpen]);
  return (
    <Fade in={delayTimeout}>
      <div>
        { children }
      </div>
    </Fade>
  );
}

export default TransitionPage;
