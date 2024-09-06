import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, Rating } from '@mui/material';

// Mock Data for Products
const products = [
  {
    id: 1,
    name: 'T-shirt with Tape Details',
    price: '$120',
    image: '/assets/T-shirt with Tape Details-desktop.png',
    rating: 4.5,
    originalPrice: null,
    discount: null,
  },
  {
    id: 2,
    name: 'Skinny Fit Jeans',
    price: '$240',
    image: '/assets/Skinny Fit Jeans-desktop.png',
    rating: 3.5,
    originalPrice: '$260',
    discount: '-20%',
  },
  {
    id: 3,
    name: 'Checkered Shirt',
    price: '$180',
    image: '/assets/Checkered Shirt-desktop.png',
    rating: 4.5,
    originalPrice: null,
    discount: null,
  },
  {
    id: 4,
    name: 'Sleeve Striped T-shirt',
    price: '$130',
    image: '/assets/Sleeve Striped T-shirt-desktop.png',
    rating: 4.5,
    originalPrice: '$160',
    discount: '-30%',
  },
];

const NewArrivals = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      {/* Section Heading */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
        NEW ARRIVALS
      </Typography>

      {/* Products Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, // 2 columns for mobile, 4 for desktop
          gap: '20px',
        }}
      >
        {products.map((product, index) => (
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

export default NewArrivals;
