import { Box } from '@mui/system';
import React from 'react';

function About() {
  return (
    <Box sx={{backgroundColor: "white"}}>
      <h1>Henry Nguyen</h1>
      <h2>About me</h2>
      <p>
        Hi, my name is Quoc Hung Nguyen (That's my Vietnamese name,
        for convinience, my English name is Henry Nguyen, you can 
        just call me Henry).
      </p>
      <p>
        Currently, I'm studying my final year of the
        Bachelor degree of IT (Software Engineering) at University 
        of South Australia. As an aspiring IT student, I have been 
        passionate about technology since my high school, and started 
        coding since I was in my 11th grade. In the past, I used 
        to play CTFs (Capture The Flag) security competitions with 
        some other students, which inspired me to learn more about 
        information systems, how they works, which is why I have 
        more interests in system architecture and backend, compared 
        to other techs.
      </p>
      <p>
        I'm interested in solving problem too, whether building a product 
        to solve some daily problems, or highly technical problems, 
        which is why, when I don't have to study for Uni or doing 
        any project, you might find me joining some competitions 
        (hackathons, competitive programming, algo trading, etc.). I also did a summer 
        internship as a Fullstack Software Engineer (SWE) at Maptek, a mining company, so if you have any 
        questions about the company, feel free to reach me out.
      </p>
      <p>
        This is the place where you can find more information about 
        me, all of my personal projects, and potentially some blog 
        posts in the future (if I have time 😅)
      </p>
      <p>
        I'm currently seeking for opportunities (internship, 
        part-time, or graduate) to gain industry experience in 
        software engineering, especially in web/mobile 
        development or DevOps/SRE. So, if you know any available 
        opportunity, please feel free to get in touch, I'd 
        appreciate that.
      </p>
    </Box>
  );
}

export default About;
