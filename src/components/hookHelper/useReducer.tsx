import React, { useReducer } from 'react';
import { Button } from '@mui/material';

interface Action {
  type: string;
}

const ActionTypes = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

function reducer(state: number, action: Action) {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return state + 1;
    case ActionTypes.DECREMENT:
      if (state > 0) {
        return state - 1;
      }
      return state;
    default:
      throw new Error(`Incorrect action${action}`);
  }
}

function reducerObject(state: { count: number }, action: Action) {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { count: state.count + 1 };
    case ActionTypes.DECREMENT:
      if (state.count > 0) {
        return { count: state.count - 1 };
      }
      return state;
    default:
      throw new Error(`Incorrect action${action}`);
  }
}

function init(defaultValue: number) {
  return { count: defaultValue };
}

export default function UseReducerDemo() {
  // le hook useReducer à la même effect que le useState, mais permet plusieur muation possible
  const [count, dispatch] = useReducer(reducer, 0);
  // même chose avec un object, le 3eme params est la méthode pour initialisé l'object
  const [count2, dispatch2] = useReducer(reducerObject, 0, init);

  return (
    <>
      <h1>Bonjour</h1>
      <p>
        Compteur :
        {count}
      </p>
      <Button onClick={() => dispatch({ type: ActionTypes.INCREMENT })}>Increment</Button>
      <Button onClick={() => dispatch({ type: ActionTypes.DECREMENT })}>Decrement</Button>
      <p>
        Compteur (version object) :
        {count2.count}
      </p>
      <Button onClick={() => dispatch2({ type: ActionTypes.INCREMENT })}>Increment</Button>
      <Button onClick={() => dispatch2({ type: ActionTypes.DECREMENT })}>Decrement</Button>
    </>
  );
}
