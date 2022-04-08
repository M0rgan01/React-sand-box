import React from 'react';
import { Book } from '@material-ui/icons';
import { ComponentTitle } from '../common/ComponentTitle';
import './Checkers.css';

export default function CheckersGame() {
  return (
    <>
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
    </>
  );
}
