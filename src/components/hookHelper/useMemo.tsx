// https://www.youtube.com/watch?v=wNX5iRhczHM&list=PLjwdMgw5TTLWom67YfZuha-1iYzIirwJR&index=18
import React, { useMemo, useState } from 'react';
import { TextField } from '@mui/material';

function encode(number: number) {
  wait(1000);
  return Date.now();
}

function wait(duration: number) {
  const t = Date.now();
  const condition = true;
  while (condition) {
    if (Date.now() - t > duration) {
      return true;
    }
  }
  return true;
}

export default function UseMemoDemo() {
  const [name, setName] = useState('name');
  const [number, setNumber] = useState(0);

  const onUpdateName = (newValue: string) => {
    setName(newValue);
  };

  const onUpdateNumber = (newValue: string) => {
    setNumber(Number(newValue));
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
  const encodeNumber = useMemo(() => {
    console.log('rendu pour encodeNumber');
    return encode(number);
  }, [number]);

  return (
    <>
      <div>
        <TextField
          label="Name"
          type="text"
          value={name}
          name="name"
          onChange={(e) => onUpdateName(e.target.value)}
        />
      </div>
      <div>
        <TextField
          label="Number"
          type="number"
          id="number"
          value={number}
          name="number"
          onChange={(e) => onUpdateNumber(e.target.value)}
        />
      </div>
      <h2>Name</h2>
      <p>{name}</p>
      <h2>Number</h2>
      <p>{number}</p>
      <p>
        Encoded number result:
        {encodeNumber}
      </p>
    </>
  );
}
