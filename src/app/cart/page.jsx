"use client";
import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';
import { Box, Typography, Grid } from '@mui/material';

// Import the Navbar and Frame-1-Homepage components
import Navbar from "../components/Navbar"; 
import Frame1Homepage from '../components/Frame-1-Homepage';

const CartPage = () => {
  const { cart } = useContext(CartContext);
  const [isMounted, setIsMounted] = useState(false);

  // Use useEffect to track when the component has mounted
  useEffect(() => {
    setIsMounted(true); // Mark as mounted when the component has rendered on the client
  }, []);

  // If the component is not mounted, return null to avoid mismatch between client and server
  if (!isMounted) {
    return null;
  }

  return (
    <Box>
      {/* Frame-1-Homepage at the top */}
      <Frame1Homepage />

      {/* Navbar below Frame-1-Homepage */}
      <Navbar />

      {/* Main Cart Content */}
      <Box sx={{ padding: '40px' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
          Your Cart
        </Typography>

        <Grid container spacing={3}>
          {/* Cart Items */}
          <Grid item xs={12} md={8}>
            {cart.length > 0 ? (
              cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))
            ) : (
              <Typography>Your cart is empty</Typography>
            )}
          </Grid>

          {/* Only show Order Summary if cart has items */}
          {cart.length > 0 && (
            <Grid item xs={12} md={4}>
              <OrderSummary />
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default CartPage;
