import React, { useEffect, useState } from 'react';
import initKeycloak from './services/keycloak';
import { Box } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AppRoutes } from './components/navigation/routing/AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import MainNavigation from './components/navigation/MainNavigation';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initKeycloak().then(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Box minHeight={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <CircularProgress style={{ color: 'blue' }} size={60}/>
      </Box>
    );
  } else {
    return (
      <Router>
        <Box mt={6}/>
        <MainNavigation/>
        <Box mt={6}/>
        <Box display={'flex'}>
          <AppRoutes/>
        </Box>
      </Router>
    );
  }
}

export default App;
