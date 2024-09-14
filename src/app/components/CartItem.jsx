"use client";
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Box, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart, deleteFromCart } = useContext(CartContext);

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Stack items vertically on mobile, horizontally on larger screens
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: { xs: '10px', sm: '20px' }, // Adjust padding for mobile and desktop
        borderBottom: '1px solid #ccc',
        textAlign: { xs: 'center', sm: 'left' } // Center text for mobile
      }}
    >
      {/* Product Image and Details */}
      <Box 
        sx={{
          display: 'flex', 
          alignItems: 'center', 
          flexDirection: { xs: 'column', sm: 'row' }, // Stack image and details on mobile
          marginBottom: { xs: '10px', sm: '0' } // Add bottom margin on mobile
        }}
      >
        {/* Update the image source to fetch from the public/assets folder */}
        <img 
          src="/assets/tshirt-side.png" 
          alt={item.name} 
          style={{
            width: '60px', // Reduced size for mobile
            height: 'auto',
            marginRight: { xs: '0', sm: '20px' }, // Remove margin on mobile
            marginBottom: { xs: '10px', sm: '0' } // Add margin below image on mobile
          }} 
        />
        <Box>
          <Typography variant="h6" sx={{ fontSize: { xs: '16px', sm: '18px' }, fontWeight: 'bold' }}>
            {item.name}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
            Size: {item.size}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
            Color: {item.color}
          </Typography>
        </Box>
      </Box>

      {/* Quantity and Price Controls */}
      <Box 
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', sm: 'flex-end' },
          gap: '10px'
        }}
      >
        {/* Quantity Control */}
        <IconButton onClick={() => removeFromCart(item)} size="small" sx={{ border: '1px solid #ccc' }}>
          <RemoveIcon fontSize="small" />
        </IconButton>
        <Typography>{item.quantity}</Typography>
        <IconButton onClick={() => addToCart(item)} size="small" sx={{ border: '1px solid #ccc' }}>
          <AddIcon fontSize="small" />
        </IconButton>

        {/* Total Price */}
        <Typography sx={{ ml: 2, fontWeight: 'bold', fontSize: { xs: '14px', sm: '16px' } }}>
          ${item.price * item.quantity}
        </Typography>

        {/* Delete Item */}
        <IconButton 
          onClick={() => deleteFromCart(item)} 
          size="small" 
          sx={{ ml: 2, border: '1px solid #ccc', backgroundColor: '#f5f5f5' }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CartItem;
