import React, { useState } from 'react';
import './overlay.css';
import { Button, Link, Typography } from '@material-ui/core';
import { TransitionPage } from '../common/TransitionPage';
import { clickPosition, showOverlay } from '../../plugins/animeBackground';

function OverlayMenu() {
  const [isOverlay1Open, setOverlay1Open] = useState(false);
  const [isOverlay2Open, setOverlay2Open] = useState(false);
  const showOverlay2 = (event: React.MouseEvent) => {
    clickPosition(event);
    showOverlay({ complete: () => setOverlay2Open(true) });
  };

  return (
    <TransitionPage disable={isOverlay2Open}>

      <Button variant="contained" onClick={() => setOverlay1Open(true)}>Open overlay</Button>
      <Button variant="contained" onClick={(e) => showOverlay2(e)}>Open overlay custom</Button>

      <Typography className="overlay" style={{ transform: isOverlay1Open ? 'translateX(0)' : 'translateX(-100%)' }}>

        <Link onClick={() => setOverlay1Open(false)}>
          <span role="img" aria-label="about us">💁🏻‍♂️</span>
          About us
        </Link>
        <Link onClick={() => setOverlay1Open(false)}>
          <span role="img" aria-label="price">💸</span>
          Pricing
        </Link>
        <Link onClick={() => setOverlay1Open(false)}>
          <span role="img" aria-label="contact">📩</span>
          Contact
        </Link>
      </Typography>

      {isOverlay2Open
    && (
    <Typography className="overlay2">

      <Link onClick={() => setOverlay2Open(false)}>
        <span role="img" aria-label="about us">💁🏻‍♂️</span>
        About us
      </Link>
      <Link onClick={() => setOverlay2Open(false)}>
        <span role="img" aria-label="price">💸</span>
        Pricing
      </Link>
      <Link onClick={() => setOverlay2Open(false)}>
        <span role="img" aria-label="contact">📩</span>
        Contact
      </Link>

    </Typography>
    )}

    </TransitionPage>
  );
}

export default OverlayMenu;
