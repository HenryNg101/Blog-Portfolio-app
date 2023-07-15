import { Paper, Grid, Typography, Button } from '@mui/material';
import React from 'react';

interface ImageInfo {
  loc: string;
  alt: string;  //Alternative title when image is not available
}

interface ProjectInfo {
  url: string;
  title: string;
  desc: string;
}

interface CardProps {
  img: ImageInfo;
  project_info: ProjectInfo;
  technologies_used: Array<string>;
}

export default function ProjectInfoCard({img, project_info, technologies_used}: CardProps) {
  return (
    <a href={project_info.url} target='_blank' rel="noopener noreferrer">
      <Paper 
        elevation={10} 
        sx={{ 
          borderRadius: '20px', 
          p: 3, 
          m: 2,
          '&:hover': {transform: 'scale(1.05)'}
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <img src={img.loc} alt={img.alt} width={150}/>
          </Grid>

          <Grid item xs={9}>
            <Typography component="h6" variant='h5' sx={{fontWeight: 'bold'}}>{project_info.title}</Typography>            
            <Grid container spacing={1}>
              {
                technologies_used.map((tech) => (
                  <Grid item>
                    <Button sx={{border:"thin dashed", color: 'black', my: 1, '&:hover': {backgroundColor: '#dedede'}}}>
                      {tech}
                    </Button>
                  </Grid>
                ))
              }
            </Grid>
            <Typography component="p">{project_info.desc}</Typography>
          </Grid>

        </Grid>
      </Paper>
    </a>
  );
}