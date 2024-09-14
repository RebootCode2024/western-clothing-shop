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
    <Box sx={{
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: '20px', 
      borderBottom: '1px solid #ccc'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {/* Update the image source to fetch from the public/assets folder */}
        <img src="/assets/tshirt-side.png" alt={item.name} style={{ width: '80px', height: 'auto', marginRight: '20px' }} />
        <Box>
          <Typography variant="h6">{item.name}</Typography>
          <Typography variant="body2">Size: {item.size}</Typography>
          <Typography variant="body2">Color: {item.color}</Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={() => removeFromCart(item)}>
          <RemoveIcon />
        </IconButton>
        <Typography>{item.quantity}</Typography>
        <IconButton onClick={() => addToCart(item)}>
          <AddIcon />
        </IconButton>
        <Typography sx={{ ml: 2 }}>${item.price * item.quantity}</Typography>
        <IconButton onClick={() => deleteFromCart(item)} sx={{ ml: 2 }}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CartItem;
