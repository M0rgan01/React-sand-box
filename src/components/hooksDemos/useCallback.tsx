import React, { useCallback, useMemo, useState } from 'react';
import { TextField, Typography } from '@mui/material';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import ComponentTitle from '../common/ComponentTitle';

export default function UseCallbackDemo() {
  const [number, setNumber] = useState(0);

  const onUpdateNumber = (newValue: string) => {
    setNumber(Number(newValue));
  };

  const callBackWithoutMemo = () => {};

  const callBackWithMemo = useCallback(() => {}, []);

  return (
    <>
      <ComponentTitle title="Use callback demonstration" icon={<CallReceivedIcon fontSize="large" />} />
      <Typography variant="h5">
        Update number for trigger update in components
      </Typography>
      <TextField
        sx={{ my: 3 }}
        margin="dense"
        fullWidth
        label="Number"
        type="number"
        id="number"
        value={number}
        name="number"
        onChange={(e) => onUpdateNumber(e.target.value)}
      />
      <UseCallbackTestComponent callback={callBackWithoutMemo} />
      <UseCallbackTestComponent callback={callBackWithMemo} />
    </>
  );
}

const UseCallbackTestComponent = React.memo((callback: {callback: () => void}) => (
  <Typography>
    Random number when rerender :&nbsp;
    { Math.random() }
  </Typography>
));
