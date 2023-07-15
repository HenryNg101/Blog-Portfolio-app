import './App.css';
import About from './pages/about';
import NavBar from './components/menu_bar';
import React from 'react';
import MediaCard from './components/info_card';
import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar/>
      <Grid container spacing={2} sx={{display: { xs: 'none', md: 'flex' }}}>
        <Grid item xs={4}>
          <MediaCard/>
        </Grid>
        <Grid item xs={7.75}>
          <Outlet/>
        </Grid>
        <Grid item xs={1/4}></Grid>
      </Grid>

      <Grid container spacing={2} sx={{display: { xs: 'flex', md: 'none' }}}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6} sx={{placeItems: 'center'}}>
          <MediaCard/>
        </Grid>
        <Grid item xs={3}></Grid>

        <Grid item xs={1/2}></Grid>
        <Grid item xs={11}>
          <Outlet/>
        </Grid>
        <Grid item xs={1/2}></Grid>
      </Grid>
    </>
  );
}

export default App;
