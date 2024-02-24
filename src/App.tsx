import './App.css';
import NavBar from './components/menu_bar';
import { useEffect } from 'react';
import React from 'react';
import MediaCard from './components/info_card';
import { Grid } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation().pathname;

  //Simple naming for my page
  //TODO: Need to add more complex rules in the future, if needed.
  useEffect(() => {
    document.title = 'Henry Nguyen';
    if(location === '/about'){
      document.title += ' | About';
    }
    if(location === '/projects'){
      document.title += ' | Projects';
    }
  
  }, [location]);

  return (
    <>
      <NavBar/>
      
      <Grid container spacing={2} sx={{display: { xs: 'none', md: 'flex' }}}>
        <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }}>
          <MediaCard/>
        </Grid>
          
        <Grid item xs={9}>
          <Outlet/>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{display: { xs: 'flex', md: 'none' }}}>
        <Grid item xs={12}>
          <MediaCard/>
        </Grid>
        <Grid item xs={12}>
          <Outlet/>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
