import React, { useEffect } from 'react';
import { Book } from '@mui/icons-material';
import { Button } from '@mui/material';
import { ComponentTitle } from '../common/ComponentTitle';
import { gameClose, initGame } from '../../plugins/matterGame';

export default function MatterGame() {
  useEffect(() => () => gameClose(), []);

  return (
    <>
      <ComponentTitle title="Matter game" icon={<Book fontSize="large" />} />
      <Button onClick={() => initGame()}>Start</Button>
      <div id="game-container" />
    </>
  );
}
