"use client"; // Mark this component as client-side

import React from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar"; // Import the Navbar component
import Frame1Homepage from '../components/Frame-1-Homepage';
import ProductDetail from '../components/ProductDetail'; // Import the ProductDetail component

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  return (
    <Box sx={{ padding: "0", margin: "0" }}>
      <Frame1Homepage />
      <Navbar />

      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mb: 4, mt: 4 }}>
        Product Page for {params.productId}
      </Typography>

      {/* Render the ProductDetail component */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <ProductDetail productId={params.productId} />
      </Box>
    </Box>
  );
};

export default ProductPage;
