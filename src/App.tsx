import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@mui/material';
import initKeycloak from './plugins/keycloak';
import AppRoutes from './components/navigation/routing/AppRoutes';
import { onAppInit } from './plugins/animeBackground';
import CentralLoading from './components/common/CentralLoading';
import AppBar from './components/navigation/AppBar';

function App() {
  const [loading, setLoading] = useState(true);
  const appBarRef = useRef();
  useEffect(() => {
    onAppInit();
    initKeycloak().then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <CentralLoading />
    );
  }
  return (
    <>
      <AppBar appBarRef={appBarRef} />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <AppRoutes />
      </Container>
    </>
  );
}

export default App;
