import React from 'react';
import { Paper, Typography } from '@mui/material';
import FadeIn from 'react-fade-in';
import content from '../data/aboutContent'

function About() {
  return (
    <FadeIn delay={100}>
      <Paper elevation={10} sx={{borderRadius: '20px', padding: 3,  width: 'calc(87.5%)', mx: 'auto'}}>
        <Typography variant='h6' component="h2" sx={{mb: 2, fontWeight: 'bold', textAlign: 'center'}}>
          About me
        </Typography>
        {content.map((line) => <Typography variant="subtitle1" sx={{mb: 2, fontSize: 18}}>{line}</Typography>)}
      </Paper>
    </FadeIn>
  );
}

export default About;
