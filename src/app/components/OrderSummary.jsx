"use client";
import React, { useContext } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { CartContext } from '../context/CartContext';

const OrderSummary = () => {
  const { cart } = useContext(CartContext);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.2; // Assuming a 20% discount
  const deliveryFee = 15; // Fixed delivery fee

  const total = subtotal - discount + deliveryFee;

  return (
    <Box sx={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Order Summary
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography>Subtotal</Typography>
        <Typography>${subtotal.toFixed(2)}</Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography>Discount (-20%)</Typography>
        <Typography>-${discount.toFixed(2)}</Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography>Delivery Fee</Typography>
        <Typography>${deliveryFee}</Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h6">Total</Typography>
        <Typography variant="h6">${total.toFixed(2)}</Typography>
      </Box>

      <TextField fullWidth placeholder="Add promo code" variant="outlined" size="small" sx={{ mb: 2 }} />
      <Button fullWidth variant="contained" color="primary">
        Go to Checkout
      </Button>
    </Box>
  );
};

export default OrderSummary;
