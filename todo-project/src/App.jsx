import React, { useEffect, useState } from 'react';
import initKeycloak from './plugins/keycloak';
import { Box } from '@material-ui/core';
import { AppRoutes } from './components/navigation/routing/AppRoutes';
import { Router } from 'react-router-dom';
import MainNavigation from './components/navigation/MainNavigation';
import history from './plugins/history';
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
        <CentralLoading/>
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
