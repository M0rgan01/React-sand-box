import React, { useState } from 'react';
import { Button } from '@mui/material';
import PanoramaWideAngleIcon from '@mui/icons-material/PanoramaWideAngle';
import ComponentTitle from '../common/ComponentTitle';

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
    <>
      <ComponentTitle title="Custom hoob demonstration" icon={<PanoramaWideAngleIcon fontSize="large" />} />
      <Button onClick={increment}>{count}</Button>
    </>
  );
}
