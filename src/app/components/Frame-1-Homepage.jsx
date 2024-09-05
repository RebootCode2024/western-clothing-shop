"use client";

import React, { useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Frame1Homepage = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#fff',
        height: '50px',
        width: '100%',
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
        position: 'relative'
      }}
    >
      <Typography 
        variant="body1" 
        sx={{ 
          margin: '0', 
          padding: '0',
          fontSize: {
            xs: '0.8rem',  // Small devices (mobile)
            sm: '0.9rem',  // Small to medium devices (tablets)
            md: '1rem',    // Medium to large devices (desktops)
          }
        }}
      >
        Sign up and get 20% off to your first order.
      </Typography>
      <Button 
        variant="text" 
        sx={{
          color: '#fff',
          textTransform: 'none',
          fontWeight: 'bold',
          fontSize: {
            xs: '0.6rem',  // Small devices (mobile)
            sm: '0.9rem',  // Small to medium devices (tablets)
            md: '1rem',    // Medium to large devices (desktops)
          },
          margin: '0 10px',
          padding: '0',
          textDecoration: 'underline',
          '&:hover': {
            textDecoration: 'underline',
          }
        }}
        onClick={() => alert('Sign Up Clicked!')}
      >
        Sign Up Now
      </Button>
      <IconButton 
        sx={{
          position: 'absolute',
          right: '10px',
          color: '#fff',
          margin: '0',
          padding: '0',
        }}
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

export default Frame1Homepage;
