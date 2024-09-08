"use client"; // Mark this component as a client-side component

import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { Twitter, Facebook, Instagram, GitHub } from "@mui/icons-material";

// Mock data for the footer sections
const sections = [
  {
    title: "COMPANY",
    items: ["About", "Features", "Works", "Career"],
  },
  {
    title: "HELP",
    items: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
  },
  {
    title: "FAQ",
    items: ["Account", "Manage Deliveries", "Orders", "Payment"],
  },
  {
    title: "RESOURCES",
    items: ["Free eBook", "Development Tutorial", "How to - Blog", "Youtube Playlist"],
  },
];

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", padding: "40px", color: "#333", textAlign: "center" }}>
      {/* Upper section with company info and social icons */}
      <Grid container spacing={4} sx={{ justifyContent: "space-between", textAlign: { xs: "center", md: "left" } }}>
        <Grid item xs={12} md={3}>
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            SHOP.CO
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "20px" }}>
            We have clothes that suit your style and which you're proud to wear. From women to men.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, gap: "10px" }}>
            <IconButton color="inherit">
              <Twitter />
            </IconButton>
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
            <IconButton color="inherit">
              <GitHub />
            </IconButton>
          </Box>
        </Grid>

        {/* Footer sections with links */}
        {sections.map((section, index) => (
          <Grid item xs={12} md={2} key={index}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "15px" }}>
              {section.title}
            </Typography>
            {section.items.map((item, idx) => (
              <Typography key={idx} variant="body2" sx={{ marginBottom: "10px" }}>
                {item}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>

      {/* Lower section with copyright and payment methods */}
      <Box sx={{ marginTop: "40px", borderTop: "1px solid #ddd", paddingTop: "20px" }}>
        <Typography variant="body2" sx={{ marginBottom: "20px", color: "#666" }}>
          Shop.co © 2000-2023, All Rights Reserved
        </Typography>
        <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "center" }, gap: "10px" }}>
          <img src="/assets/visa.png" alt="Visa" style={{ height: "35px" }} />
          {/* <img src="/paypal.png" alt="PayPal" style={{ height: "30px" }} />
          <img src="/apple-pay.png" alt="Apple Pay" style={{ height: "30px" }} />
          <img src="/google-pay.png" alt="Google Pay" style={{ height: "30px" }} /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
