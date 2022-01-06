import React, { useState } from 'react';
import './overlay.css';
import { TransitionPage } from '../common/TransitionPage';
import { Button, Typography } from '@material-ui/core';
import { clickPosition, showOverlay } from '../../plugins/animeBackground';

export function OverlayMenu() {

  const [isOverlay1Open, setOverlay1Open] = useState(false);
  const [isOverlay2Open, setOverlay2Open] = useState(false);
  const showOverlay2 = (event) => {
    clickPosition(event);
    showOverlay({ complete: () => setOverlay2Open(true) });
  };

  return <TransitionPage disable={isOverlay2Open}>

    <Button variant={'contained'} onClick={() => setOverlay1Open(true)}>Open overlay</Button>
    <Button variant={'contained'} onClick={(e) => showOverlay2(e)}>Open overlay custom</Button>

    <Typography className={'overlay'} style={{ transform: isOverlay1Open ? 'translateX(0)' : 'translateX(-100%)' }}>

      <span onClick={() => setOverlay1Open(false)}>
        <span role="img" aria-label="about us">💁🏻‍♂️</span>
        About us
      </span>
      <span onClick={() => setOverlay1Open(false)}>
        <span role="img" aria-label="price">💸</span>
        Pricing
      </span>
      <span onClick={() => setOverlay1Open(false)}>
        <span role="img" aria-label="contact">📩</span>
        Contact
      </span>
    </Typography>

    {isOverlay2Open &&
    <Typography className={'overlay2'}>

      <span onClick={() => setOverlay2Open(false)}>
        <span role="img" aria-label="about us">💁🏻‍♂️</span>
        About us
      </span>
      <span onClick={() => setOverlay2Open(false)}>
        <span role="img" aria-label="price">💸</span>
        Pricing
      </span>
      <span onClick={() => setOverlay2Open(false)}>
        <span role="img" aria-label="contact">📩</span>
        Contact
      </span>

    </Typography>
    }

  </TransitionPage>;
}