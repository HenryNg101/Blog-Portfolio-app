'use client'

// import Image from "next/image";
// import styles from "./page.module.css";
import { Paper, Typography } from '@mui/material';
import FadeIn from 'react-fade-in';
import content from '@/data/aboutContent';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Henry Nguyen | About</title>
      </Head>
      <FadeIn delay={100}>
        <Paper elevation={10} sx={{borderRadius: '20px', padding: 3,  width: 'calc(87.5%)', mx: 'auto'}}>
          <Typography variant='h6' component="h2" sx={{mb: 2, fontWeight: 'bold', textAlign: 'center'}}>
            About me
          </Typography>
          {content.map((line) => <Typography key={line} variant="subtitle1" sx={{mb: 2, fontSize: 18}}>{line}</Typography>)}
        </Paper>
      </FadeIn>
    </>
  );
}
