// src/components/OrderSummary.js
"use client";
import React, { useContext, useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { CartContext } from '../context/CartContext';
import { signIn, useSession } from 'next-auth/react'; // Import NextAuth functions
import DeliveryDetails from './DeliveryDetails'; // Import DeliveryDetails component

const OrderSummary = () => {
  const { cart } = useContext(CartContext);
  const { data: session } = useSession(); // Get session data from NextAuth

  const [isCheckout, setIsCheckout] = useState(false); // State to control modal visibility

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.2; // Assuming a 20% discount
  const deliveryFee = 15; // Fixed delivery fee
  const total = subtotal - discount + deliveryFee;

  const handleCheckout = () => {
    if (session) {
      // If user is logged in, open the delivery details modal
      setIsCheckout(true);
    } else {
      // If user is not logged in, trigger login
      signIn('google'); // This triggers the Google login flow (you can also add more providers)
    }
  };

  const handleClose = () => {
    setIsCheckout(false); // Close the modal
  };

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
      <Button fullWidth variant="contained" color="primary" onClick={handleCheckout}>
        {session ? 'Proceed to Checkout' : 'Go to Checkout (Login Required)'}
      </Button>

      {/* Modal for Delivery Details */}
      <DeliveryDetails open={isCheckout} handleClose={handleClose} />
    </Box>
  );
};

export default OrderSummary;
