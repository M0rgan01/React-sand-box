import React from 'react';
import { Book } from '@material-ui/icons';
import { TransitionPage } from '../common/TransitionPage';
import { ComponentTitle } from '../common/ComponentTitle';
import './Checkers.css';

export default function CheckersGame() {
  return (
    <TransitionPage>
      <ComponentTitle title="Checkers game" icon={<Book fontSize="large" />} />
      <div className="board">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </TransitionPage>
  );
}
