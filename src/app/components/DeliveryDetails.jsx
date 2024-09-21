// src/components/DeliveryDetails.jsx
"use client";
import React, { useState } from 'react';
import { TextField, Box, Button, Typography, Modal, Backdrop, Fade, Grid, InputAdornment } from '@mui/material';

const DeliveryDetails = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    countryCode: '', // Country code will only accept digits
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
    const { name, value } = e.target;

    // Ensure that the country code only contains digits
    if (name === 'countryCode') {
      // Only allow digits for country code
      const digitsOnly = value.replace(/\D/g, '');
      setFormData({ ...formData, [name]: digitsOnly });
    } else {
      setFormData({ ...formData, [name]: value });
    }
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
            width: { xs: '90%', sm: '80%', md: '50%', lg: '40%' },
            maxWidth: '600px',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: '8px',
            overflowY: 'auto',
            maxHeight: '90vh',
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

            {/* Grid for country code and phone number */}
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  label="Country Code"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                  InputProps={{
                    startAdornment: <InputAdornment position="start">+</InputAdornment>,
                  }}
                  placeholder="1" // Default example for country code
                />
              </Grid>

              <Grid item xs={8}>
                <TextField
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
            </Grid>

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
              rows={3}
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
