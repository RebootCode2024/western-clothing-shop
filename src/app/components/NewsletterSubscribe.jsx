"use client"; // Mark this component as a client-side component

import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const NewsletterSubscribe = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        padding: { xs: '20px', md: '40px 60px' }, // Padding for mobile and desktop
        textAlign: { xs: 'center', md: 'left' },
        borderRadius: '10px',
        margin: '20px 0', // Margin around the component
        maxWidth: { xs: '100%', md: '800px' }, // Set a max width for desktop
        mx: 'auto', // Center the component horizontally
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <TextField
          placeholder="Enter your email address"
          variant="outlined"
          InputProps={{ sx: { borderRadius: '50px', backgroundColor: '#fff' } }}
          fullWidth
        />
        <Button
          variant="contained"
          sx={{ borderRadius: '50px', padding: '10px 30px', fontWeight: 'bold' }}
        >
          Subscribe to Newsletter
        </Button>
      </Box>
    </Box>
  );
};

export default NewsletterSubscribe;
