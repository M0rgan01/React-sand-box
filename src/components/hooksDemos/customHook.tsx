import React, { useState } from 'react';
import { Button } from '@mui/material';

function useIncrement(base: number, step: number): [number, () => void] {
  const [count, setCount] = useState(base);
  const increment = () => {
    setCount((prevState) => prevState + step);
  };
  return [count, increment];
}

export default function CustomHookDemo() {
  const [count, increment] = useIncrement(0, 2);

  return (
    <div>
      <h1>Bonjour</h1>
      <Button onClick={increment}>{count}</Button>
    </div>
  );
}
