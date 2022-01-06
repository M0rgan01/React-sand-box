import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Fade } from '@material-ui/core';
import { hideOverlay, minCoverDuration, Overlay } from '../../plugins/animeBackground';
import CentralLoading from './CentralLoading';

export function TransitionPage({children, loading, disable}) {
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
  disable: PropTypes.bool,
  children: PropTypes.node,
};