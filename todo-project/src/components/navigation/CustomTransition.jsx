import React, { useState } from 'react';
import { Fade } from '@material-ui/core';
import PropTypes from 'prop-types';
import { minCoverDuration } from '../../plugins/animeBackground';

export default function CustomTransition({children }) {

  const [delayTimeout, setDelayTimeout] = useState(false);

  setTimeout(() => {
    setDelayTimeout(true);
  }, minCoverDuration);

  return <Fade in={ delayTimeout }>
    { children }
  </Fade>;
}

CustomTransition.propTypes = {
  children: PropTypes.element,
};