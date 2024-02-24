import React from 'react';
import { Paper, Typography } from '@mui/material';
import FadeIn from 'react-fade-in';

function About() {
  return (
    <FadeIn delay={100}>
      <Paper elevation={10} sx={{borderRadius: '20px', padding: 3,  width: 'calc(87.5%)', mx: 'auto'}}>
        <Typography variant='h6' component="h2" sx={{mb: 2, fontWeight: 'bold', textAlign: 'center'}}>
          About me
        </Typography>
        <Typography variant="body1" sx={{mb: 2}}>
          Hi, my name is Quoc Hung Nguyen (for convenience, my English name is Henry Nguyen, you can 
          just call me Henry). Currently, I'm studying my final year of the
          Bachelor degree of IT (Software Engineering) at University 
          of South Australia. 
        </Typography>
        <Typography sx={{mb: 2}}>
          As an aspiring IT student, I'm interested in solving problem, whether building a product 
          to solve some daily problems, or highly technical problems, 
          which is why, when I don't have to study for Uni or doing 
          any project, you might find me joining some competitions 
          (hackathons, competitive programming, algo trading, etc.). I also did a summer 
          internship as a Fullstack Software Engineer (SWE) at Maptek, a mining company, so if you have any 
          questions about the company, feel free to reach me out.
        </Typography>
        <Typography sx={{mb: 2}}>
          This is the place where you can find more information about 
          me, all of my personal projects, and potentially some blog 
          posts in the future (if I have time 😅)
        </Typography>
        <Typography sx={{mb: 2}}>
          I'm currently seeking for opportunities (internship, 
          part-time/casual, or graduate) to gain industry experience in 
          software engineering, especially in web/mobile 
          development-related areas or DevOps/SRE. So, if you know any available 
          opportunity, please feel free to get in touch, I'd 
          appreciate that.
        </Typography>
      </Paper>
    </FadeIn>
  );
}

export default About;
