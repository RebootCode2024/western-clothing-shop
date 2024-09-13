"use client"; // Mark this component as client-side

import React, { useState, useContext } from 'react';
import { Box, Typography, Button, IconButton, Chip, Avatar, Rating, Snackbar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CartContext } from '../context/CartContext'; // Import CartContext for adding to cart

const ProductDetail = ({ productId }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("/assets/tshirt-main.png"); // Set initial image
  const { addToCart } = useContext(CartContext); // Access CartContext to add items to cart
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State to control Snackbar

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  // Handle image click and set the selected image
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  // Add to cart functionality with Snackbar notification
  const handleAddToCart = () => {
    addToCart({ id: productId, name: "ONE LIFE GRAPHIC TSHIRT", price: 260 }, quantity);
    setSnackbarOpen(true); // Show snackbar notification
  };

  // Close Snackbar handler
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', md: '150px 1fr 1fr' }, // 1 column for mobile, side-by-side for desktop
      gap: '40px',
      padding: { xs: '20px', md: '40px' },
      alignItems: 'start', // Align items to the top
      maxWidth: '1200px', // Limit the overall width of the layout on larger screens
      margin: '0 auto', // Center the layout
      gridTemplateAreas: { xs: `"preview" "thumbnails" "details"`, md: `"thumbnails preview details"` } // Mobile layout
    }}>
      
      {/* Left Column: Clickable Image Thumbnails */}
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'row', md: 'column' }, // Stack images in a column for desktop
        gap: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        gridArea: 'thumbnails', // Define grid area for mobile layout
      }}>
        {/* Clickable Images */}
        <Box sx={{ 
          border: '2px solid #ccc', padding: '10px', borderRadius: '8px', cursor: 'pointer' 
        }} onClick={() => handleImageClick("/assets/tshirt-main.png")}>
          <img src="/assets/tshirt-main.png" alt="T-shirt" style={{ width: '100%' }} />
        </Box>
        <Box sx={{ 
          border: '2px solid #ccc', padding: '10px', borderRadius: '8px', cursor: 'pointer' 
        }} onClick={() => handleImageClick("/assets/tshirt-back.png")}>
          <img src="/assets/tshirt-back.png" alt="T-shirt Back" style={{ width: '100%' }} />
        </Box>
        <Box sx={{ 
          border: '2px solid #ccc', padding: '10px', borderRadius: '8px', cursor: 'pointer' 
        }} onClick={() => handleImageClick("/assets/tshirt-side.png")}>
          <img src="/assets/tshirt-side.png" alt="T-shirt Side" style={{ width: '100%' }} />
        </Box>
      </Box>

      {/* Middle Column: Preview of the selected image */}
      <Box sx={{ 
        border: '2px solid #ccc', padding: '10px', borderRadius: '8px', maxWidth: '100%', height: 'auto', 
        gridArea: 'preview' // Define grid area for mobile layout
      }}>
        <img src={selectedImage} alt="Selected T-shirt" style={{ width: '100%' }} />
      </Box>

      {/* Right Column: Product Details */}
      <Box sx={{ flex: 1, gridArea: 'details' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left' }}>ONE LIFE GRAPHIC TSHIRT</Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, textAlign: 'left' }}>
          <Rating value={4.5} precision={0.5} readOnly sx={{ mr: 1 }} />
          <Typography variant="body2">4.5/5</Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, textAlign: 'left' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#000' }}>$260</Typography>
          <Typography variant="body1" sx={{ textDecoration: 'line-through', color: '#777', ml: 2 }}>$300</Typography>
          <Chip label="-40%" color="error" sx={{ ml: 2 }} />
        </Box>

        <Typography variant="body2" sx={{ mb: 3, color: '#555', textAlign: 'left' }}>
          This graphic t-shirt is perfect for any occasion. Crafted from soft and breathable fabric, it offers superior comfort and style.
        </Typography>

        {/* Color Options */}
        <Typography variant="body1" sx={{ mb: 1, textAlign: 'left' }}>Select Colors</Typography>
        <Box sx={{ display: 'flex', gap: '10px', mb: 2, textAlign: 'left' }}>
          <Avatar sx={{ bgcolor: '#3e403f', width: 30, height: 30 }}></Avatar>
          <Avatar sx={{ bgcolor: '#2e4d46', width: 30, height: 30 }}></Avatar>
          <Avatar sx={{ bgcolor: '#2a2a3e', width: 30, height: 30 }}></Avatar>
        </Box>

        {/* Size Options */}
        <Typography variant="body1" sx={{ mb: 1, textAlign: 'left' }}>Choose Size</Typography>
        <Box sx={{ display: 'flex', gap: '10px', mb: 2, textAlign: 'left' }}>
          {['Small', 'Medium', 'Large', 'X-Large'].map(size => (
            <Button key={size} variant={size === 'Large' ? 'contained' : 'outlined'}>{size}</Button>
          ))}
        </Box>

        {/* Quantity Selector */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: 4 }}>
          <IconButton onClick={decreaseQuantity} sx={{ border: '1px solid #ccc' }}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="body1">{quantity}</Typography>
          <IconButton onClick={increaseQuantity} sx={{ border: '1px solid #ccc' }}>
            <AddIcon />
          </IconButton>
        </Box>

        {/* Add to Cart Button */}
        <Button variant="contained" color="primary" sx={{ width: '100%', padding: '10px', backgroundColor: '#000' }} onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Box>

      {/* Snackbar for feedback */}
      <Snackbar
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
        message={`${quantity} x ONE LIFE GRAPHIC TSHIRT added to cart`}
        autoHideDuration={3000} // Auto-hide after 3 seconds
      />
    </Box>
  );
};

export default ProductDetail;
