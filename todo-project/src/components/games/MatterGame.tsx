import React, { useEffect } from 'react';
import { Book } from '@material-ui/icons';
import { Button } from '@material-ui/core';
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
