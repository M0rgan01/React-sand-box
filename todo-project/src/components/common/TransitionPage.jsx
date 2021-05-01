import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Fade } from '@material-ui/core';
import { hideOverlay, minCoverDuration, Overlay } from '../../plugins/animeBackground';
import CentralLoading from './CentralLoading';

export function TransitionPage({children, loading}) {
  const [delayTimeout, setDelayTimeout] = useState(false);

  useEffect(() => {
    if (!loading && Overlay.open) {
      hideOverlay();
    }
  }, [loading, Overlay.open]);

  if (!loading) {
    setTimeout(() => {
      setDelayTimeout(true);
    }, minCoverDuration);
  }

  if (loading) {
    return <CentralLoading/>;
  } else {
   return <Fade in={ delayTimeout }>
     <div>
       { children }
     </div>
    </Fade>;
  }
}

TransitionPage.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node,
};