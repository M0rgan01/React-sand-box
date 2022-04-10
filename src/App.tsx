import React, { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import initKeycloak from './plugins/keycloak';
import AppRoutes from './components/navigation/routing/AppRoutes';
import MainNavigation from './components/navigation/MainNavigation';
import { onAppInit } from './plugins/animeBackground';
import CentralLoading from './components/common/CentralLoading';

function App() {
  const [loading, setLoading] = useState(true);

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
      <MainNavigation />
      <Box id="header-bottom" />
      <Container maxWidth="md">
        <AppRoutes />
      </Container>
    </>
  );
}

export default App;
