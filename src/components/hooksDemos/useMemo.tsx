// https://www.youtube.com/watch?v=wNX5iRhczHM&list=PLjwdMgw5TTLWom67YfZuha-1iYzIirwJR&index=18
import React, { useMemo, useState } from 'react';
import {
  Box,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Sync } from '@mui/icons-material';
import ComponentTitle from '../common/ComponentTitle';

export default function UseMemoDemo() {
  const [number, setNumber] = useState(0);
  const [string, setString] = useState('');

  const onUpdateNumber = (newValue: string) => {
    setNumber(Number(newValue));
  };

  const onUpdateString = (newValue: string) => {
    setString(newValue);
  };

  // Sans useMemo
  // const encodeNumber = encode(number);

  // useMemo prend en dépendance un tableau de propriétés à observer
  // et retourne la propriété à mémoriser
  // -> sur le rendu initial ou si la propriété change, le code
  // est exécuté le re-rendu de encodeNumber est réalisé
  // -> sans le useMemo, la modification de l'autre champ aurais re-rendu
  // le composant et donc éxécuté à nouveau
  // la méthode encode (et donc l'attente de 1s)
  const memo = useMemo(() => <UseMemoTestComponent number={number} />, [number]);

  return (
    <>
      <ComponentTitle title="Use memo demonstration" icon={<Sync fontSize="large" />} />
      <Grid container spacing={1}>
        <Grid xs={6}>
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
        </Grid>
        <Grid xs={6}>
          <Typography variant="h5">
            Update String for trigger update in components
          </Typography>
          <TextField
            sx={{ my: 3 }}
            margin="dense"
            fullWidth
            label="String"
            id="string"
            value={string}
            name="string"
            onChange={(e) => onUpdateString(e.target.value)}
          />
        </Grid>
      </Grid>
      <Typography variant="h5">
        Components with useMemo
      </Typography>
      <Box my={2}>
        {memo}
      </Box>
      <Typography variant="h5">
        Components without useMemo
      </Typography>
      <Box my={2}>
        <UseMemoTestComponent number={number} />
      </Box>
    </>
  );
}

function UseMemoTestComponent({ number }: {number: number}) {
  return (
    <Typography>
      Random number when rerender :&nbsp;
      { Math.random() + number }
    </Typography>
  );
}
