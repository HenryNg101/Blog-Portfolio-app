import './App.css';
import About from './pages/about';
import NavBar from './components/menu_bar';
import React from 'react';
import MediaCard from './components/info_card';
import { Grid, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar/>
      <Grid container spacing={2} sx={{display: { xs: 'none', md: 'flex' }}}>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <MediaCard/>
        </Grid>
        
        <Grid item xs={8}>
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
