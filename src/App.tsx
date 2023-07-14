import './App.css';
import About from './About';
import { 
  createBrowserRouter,
  Route 
} from 'react-router-dom';
import NavBar from './NavBar';
import React from 'react';
import MediaCard from './Card';
import {
  Grid
} from '@mui/material';

function App() {
  return (
    <>
      <NavBar/>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <MediaCard/>
        </Grid>
        <Grid item xs={7}>
          <About/>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
