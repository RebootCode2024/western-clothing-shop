import React from 'react';
import { Box } from '@mui/material';

const BrandsLogos = () => {
  return (
    <Box
      sx={{
        height: { xs: 'auto', md: '20vh' }, // Auto height for mobile, fixed for desktop
        width: '100vw',
        display: 'flex',
        flexDirection: { xs: 'row', md: 'row' }, // Row layout for both mobile and desktop
        justifyContent: { xs: 'space-around', md: 'space-between' }, // Centered on mobile, spaced on desktop
        alignItems: 'center',
        backgroundImage: { xs: 'url(/assets/brand-bg-mobile.png)', md: 'url(/assets/brands-bg-desktop.png)' }, // Mobile and desktop background images
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: { xs: '#000', md: 'transparent' }, // Ensure black background for mobile
        padding: { xs: '10px', md: '0 5%' }, // Padding for mobile and desktop
        color: '#fff',
      }}
    >
      {/* Desktop logos */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', width: '100%' }}>
        <img src="/assets/versace-desktop.png" alt="Versace" style={{ maxWidth: '100px', height: 'auto' }} />
        <img src="/assets/zara-desktop.png" alt="Zara" style={{ maxWidth: '100px', height: 'auto' }} />
        <img src="/assets/gucci-desktop.png" alt="Gucci" style={{ maxWidth: '100px', height: 'auto' }} />
        <img src="/assets/prada-desktop.png" alt="Prada" style={{ maxWidth: '100px', height: 'auto' }} />
        <img src="/assets/calvinklein-desktop.png" alt="Calvin Klein" style={{ maxWidth: '100px', height: 'auto' }} />
      </Box>

      {/* Mobile logos */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' }, // Flex layout on mobile, hidden on desktop
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          width: '100%',
        }}
      >
        <img src="/assets/versace-mobile.png" alt="Versace" style={{ width: '10%', height: 'auto' }} />
        <img src="/assets/zara-mobile.png" alt="Zara" style={{ width: '10%', height: 'auto' }} />
        <img src="/assets/gucci-mobile.png" alt="Gucci" style={{ width: '10%', height: 'auto' }} />
        <img src="/assets/prada-mobile.png" alt="Prada" style={{ width: '10%', height: 'auto' }} />
        <img src="/assets/calvinklein-mobile.png" alt="Calvin Klein" style={{ width: '10%', height: 'auto' }} />
      </Box>
    </Box>
  );
};

export default BrandsLogos;
