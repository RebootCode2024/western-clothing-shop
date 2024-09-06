import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, Rating } from '@mui/material';

// Mock Data for Top Selling Products
const topSellingProducts = [
  {
    id: 1,
    name: 'Vertical Striped Shirt',
    price: '$212',
    image: '/assets/Vertical Striped Shirt-desktop.png',
    rating: 5.0,
    originalPrice: '$232',
    discount: '-20%',
  },
  {
    id: 2,
    name: 'Courage Graphic T shirt',
    price: '$145',
    image: '/assets/Courage Graphic T-shirt-desktop.png',
    rating: 4.0,
    originalPrice: null,
    discount: null,
  },
  {
    id: 3,
    name: 'Loose Fit Bermuda Shorts',
    price: '$80',
    image: '/assets/Loose Fit Bermuda Shorts-desktop.png',
    rating: 3.0,
    originalPrice: null,
    discount: null,
  },
  {
    id: 4,
    name: 'Faded Skinny Jeans',
    price: '$210',
    image: '/assets/Faded Skinny Jeans-desktop.png',
    rating: 4.5,
    originalPrice: null,
    discount: null,
  },
];

const TopSelling = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      {/* Section Heading */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
        TOP SELLING
      </Typography>

      {/* Products Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, // 2 columns for mobile, 4 for desktop
          gap: '20px',
        }}
      >
        {topSellingProducts.map((product, index) => (
          <Card
            key={product.id}
            sx={{
              boxShadow: 'none',
              textAlign: 'center',
              display: { xs: index >= 2 ? 'none' : 'block', md: 'block' }, // Show only 2 items on mobile
            }}
          >
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              sx={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
                {product.name}
              </Typography>

              {/* Rating */}
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '5px' }}>
                <Rating value={product.rating} precision={0.5} readOnly />
                <Typography variant="body2" sx={{ marginLeft: '5px' }}>
                  {product.rating}/5
                </Typography>
              </Box>

              {/* Price and Discount */}
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {product.price}
                </Typography>
                {product.originalPrice && (
                  <Typography
                    variant="body2"
                    sx={{ textDecoration: 'line-through', color: 'grey', marginLeft: '10px' }}
                  >
                    {product.originalPrice}
                  </Typography>
                )}
                {product.discount && (
                  <Typography variant="body2" sx={{ color: 'red', marginLeft: '10px' }}>
                    {product.discount}
                  </Typography>
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* View All Button */}
      <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Button variant="outlined" sx={{ borderRadius: '50px', padding: '10px 30px', fontWeight: 'bold' }}>
          View All
        </Button>
      </Box>
    </Box>
  );
};

export default TopSelling;
