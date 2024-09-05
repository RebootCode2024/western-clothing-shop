import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Frame2Homepage = () => {
  return (
    <Box
      sx={{
        height: { xs: 'auto', md: '100vh' }, // Full height for large screens, auto for mobile
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: { xs: 'center', md: 'flex-start' }, // Center on mobile, left-align on large screens
        backgroundColor: { xs: '#f4f4f4', md: 'transparent' }, // Background color on mobile, transparent on desktop
        backgroundImage: { md: 'url(/assets/male-female.png)' }, // Background image for large screens
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: { xs: '20px', md: '0 5%' },
      }}
    >
      {/* Top Text Section */}
      <Box sx={{ maxWidth: { xs: '100%', md: '50%' }, textAlign: { xs: 'center', md: 'left' }, paddingBottom: { xs: '20px', md: '0' } }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            lineHeight: '1.2',
            color: '#000',
            fontSize: { xs: '2rem', md: '4rem' }, // Responsive font size
          }}
        >
          FIND CLOTHES<br />THAT MATCHES<br />YOUR STYLE
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: '20px',
            marginBottom: '30px',
            color: '#000',
            fontSize: { xs: '0.875rem', md: '1rem' }, // Responsive text size
          }}
        >
          Browse through our diverse range of meticulously crafted garments, designed
          to bring out your individuality and cater to your sense of style.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#000',
            color: '#fff',
            padding: { xs: '8px 16px', md: '10px 20px' }, // Responsive padding
            borderRadius: '20px',
            fontWeight: 'bold',
            fontSize: { xs: '0.875rem', md: '1rem' },
          }}
        >
          Shop Now
        </Button>
      </Box>

      {/* Customer Statistics Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Stacked vertically on mobile, row on desktop
          justifyContent: 'center',
          alignItems: { xs: 'center', md: 'flex-start' },
          marginTop: '40px',
        }}
      >
        {/* First Row on Mobile (Two Items) */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            mb: { xs: '20px', md: '0' }, // Margin for mobile
            maxWidth: { xs: '100%', md: '50%' }, // Ensure it spans properly on large screens
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' }, marginRight: { xs: '10px', md: '0' } }}> {/* Add margin on mobile */}
            <Typography
              variant="h4"
              sx={{ fontWeight: 'bold', color: '#000', fontSize: { xs: '1.5rem', md: '2rem' } }}
            >
              200+
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, color: '#000' }}>
              International Brands
            </Typography>
          </Box>

          <Box sx={{ textAlign: { xs: 'center', md: 'left' }, marginLeft: { xs: '10px', md: '0' } }}> {/* Add margin on mobile */}
            <Typography
              variant="h4"
              sx={{ fontWeight: 'bold', color: '#000', fontSize: { xs: '1.5rem', md: '2rem' } }}
            >
              2,000+
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, color: '#000' }}>
              High-Quality Products
            </Typography>
          </Box>
        </Box>

        {/* Second Row on Mobile (One Item Centered) */}
        <Box
          sx={{
            textAlign: 'center',
            width: '100%',
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', color: '#000', fontSize: { xs: '1.5rem', md: '2rem' } }}
          >
            30,000+
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, color: '#000' }}>
            Happy Customers
          </Typography>
        </Box>
      </Box>

      {/* Mobile Image Section (Visible only on mobile) */}
      <Box
        sx={{
          display: { xs: 'block', md: 'none' }, // Only visible on mobile
          width: '100%',
          marginTop: '20px',
        }}
      >
        <img
          src="/assets/male-female-mobile.png"
          alt="Fashionable male and female"
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
    </Box>
  );
};

export default Frame2Homepage;
