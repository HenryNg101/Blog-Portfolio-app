import { Paper, Grid, Typography, Button } from '@mui/material';
import React from 'react';
// import Image from 'next/image';
import { ProjectDetails } from '@/types/project_details';

//Some styling for components (sx prop)
const cardStyle = { 
  borderRadius: '20px', p: 3, my: 2, mx: 'auto', 
  '&:hover': {transform: 'scale(1.05)'}, width: 'calc(100% * 7 / 8)'
}
const techNameButtonStyle = {
  border:"thin dashed", color: 'black', my: 1, 
  '&:hover': {backgroundColor: '#dedede'}
}

export default function ProjectInfoCard({url, title, desc, img, technologies_used}: ProjectDetails) {
  return (
    <Paper elevation={10} sx={cardStyle}>
      <a href={url} rel="noopener noreferrer">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <img src={img.loc} alt={img.alt} width={150}/>
          </Grid>

          <Grid item xs={10}>
            <Typography component="h6" variant='h5' sx={{fontWeight: 'bold'}}>{title}</Typography>            
            <Grid container spacing={1}>
              {technologies_used.map((tech) => (
                <Grid item key={tech}>
                  <Button sx={techNameButtonStyle}>{tech}</Button>
                </Grid>
              ))}
            </Grid>
            <Typography component="p">{desc}</Typography>
          </Grid>

        </Grid>
      </a>
    </Paper>
  );
}