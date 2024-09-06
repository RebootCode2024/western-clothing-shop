"use client"; // Mark this component as a client-side component

import React from 'react';
import { Box, Typography } from '@mui/material';

const styles = [
  {
    id: 1,
    name: 'Casual',
    imageDesktop: '/assets/casual-desktop.png',
    imageMobile: '/assets/casual-mobile.png',
  },
  {
    id: 2,
    name: 'Formal',
    imageDesktop: '/assets/formal-desktop.png',
    imageMobile: '/assets/formal-mobile.png',
  },
  {
    id: 3,
    name: 'Party',
    imageDesktop: '/assets/party-desktop.png',
    imageMobile: '/assets/party-mobile.png',
  },
  {
    id: 4,
    name: 'Gym',
    imageDesktop: '/assets/gym-desktop.png',
    imageMobile: '/assets/gym-mobile.png',
  },
];

const BrowseByDressStyle = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
        BROWSE BY DRESS STYLE
      </Typography>

      {/* Grid layout */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
          gap: '20px',
        }}
      >
        {styles.map((style) => (
          <Box
            key={style.id}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '10px',
              height: { xs: '187.5px', md: '350px' },
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-10px)',
              },
            }}
            onClick={() => alert(`You clicked on ${style.name}`)} // Clickable action
          >
            {/* Image */}
            <img
              src={style.imageDesktop}
              alt={style.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
            {/* Label Overlay */}
            <Typography
              sx={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                color: '#fff',
                fontWeight: 'bold',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '5px 10px',
                borderRadius: '5px',
              }}
            >
              {style.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BrowseByDressStyle;
