import React, { useState } from 'react';
import './overlay.css';
import { Box, Button } from '@mui/material';
import { Image } from '@mui/icons-material';
import { clickPosition, hideOverlay, showOverlay } from '../../plugins/animeBackground';
import Overlay from '../navigation/Overlay';
import ComponentTitle from '../common/ComponentTitle';

function OverlayMenu() {
  const [isOverlay1Open, setOverlay1Open] = useState(false);
  const [isOverlay2Open, setOverlay2Open] = useState(false);
  const showOverlay2 = (event: React.MouseEvent) => {
    clickPosition(event);
    showOverlay({ complete: () => setOverlay2Open(true) });
  };

  const hideOverlay2 = () => {
    hideOverlay();
    setOverlay2Open(false);
  };
  return (
    <>
      <ComponentTitle title="Overlay demonstration" icon={<Image fontSize="large" />} />
      <Box display="flex" justifyContent="space-evenly">
        <Button
          color="success"
          variant="contained"
          onClick={() => setOverlay1Open(true)}
        >
          Open overlay
        </Button>
        <Button
          color="warning"
          variant="contained"
          onClick={(e) => showOverlay2(e)}
        >
          Open overlay custom
        </Button>
      </Box>
      <Box
        className="overlay"
        style={{ transform: isOverlay1Open ? 'translateX(0)' : 'translateX(-100%)' }}
      >
        <Overlay hideOverlay={() => setOverlay1Open(false)} />
      </Box>
      { isOverlay2Open && <Overlay hideOverlay={hideOverlay2} />}
    </>
  );
}

export default OverlayMenu;
