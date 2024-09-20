// src/components/DeliveryDetails.jsx
"use client";
import React, { useState } from 'react';
import { TextField, Box, Button, Typography, Modal, Backdrop, Fade } from '@mui/material';

const DeliveryDetails = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    instructions: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Process form data here
    handleClose(); // Close modal after submission
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '8px',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Delivery Details
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="Street Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="State/Province"
              name="state"
              value={formData.state}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="Zip/Postal Code"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="Delivery Instructions"
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default DeliveryDetails;
