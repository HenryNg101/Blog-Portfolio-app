'use client'

// import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import React from 'react';
import NavBar from "@/components/NavBar";
import { Grid } from "@mui/material";
import MediaCard from "@/components/MediaCard";

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar /> {/* Navbar, persists across pages */}

        {/* Desktop Layout */}
        <Grid container spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <MediaCard /> {/* MediaCard, persists across pages */}
          </Grid>
          <Grid item xs={9}>
            {children} {/* Dynamic content */}
          </Grid>
        </Grid>

        {/* Mobile Layout */}
        <Grid container spacing={2} sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Grid item xs={12}>
            <MediaCard />
          </Grid>
          <Grid item xs={12}>
            {children} {/* Dynamic content */}
          </Grid>
        </Grid>
      </body>
    </html>
  );
}