import React, { useEffect } from 'react';
import { Book } from '@material-ui/icons';
import { ComponentTitle } from './common/ComponentTitle';
import { TransitionPage } from './common/TransitionPage';
import { Button } from '@material-ui/core';
import { gameClose, initGame } from '../plugins/matterGame';

export default function Game() {

  useEffect(() => {
    return () =>  gameClose();
  },[]);

  return <TransitionPage>
    <ComponentTitle title={ 'Game' } icon={ <Book fontSize={ 'large' }/> }/>
    <Button onClick={ () => initGame() }>Start</Button>
    <div id={ 'game-container' }/>
  </TransitionPage>;
}