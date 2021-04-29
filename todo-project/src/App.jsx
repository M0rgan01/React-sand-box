import React, { useEffect, useState } from 'react';
import initKeycloak from './plugins/keycloak';
import { Box } from '@material-ui/core';
import { AppRoutes } from './components/navigation/routing/AppRoutes';
import { Router } from 'react-router-dom';
import MainNavigation from './components/navigation/MainNavigation';
import history from './plugins/history';
import { onAppInit } from './plugins/animeBackground';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initKeycloak().then(() => {
      onAppInit();
      setLoading(false);
    });

  }, []);

  if (loading) {
    return (
        <Box minHeight={ '100vh' } display={ 'flex' } justifyContent={ 'center' } alignItems={ 'center' }>
          <div className="loading"/>
        </Box>
    );
  } else {
    return (
        <Router history={ history }>
          <MainNavigation/>
          <Box id="header-bottom"/>
          <Box display={ 'flex' }>
            <AppRoutes/>
          </Box>
        </Router>
    );
  }
}

export default App;
