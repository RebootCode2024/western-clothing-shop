"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar"; // Import the Navbar component
import Frame1Homepage from '../components/Frame-1-Homepage';
import ProductDetail from '../components/ProductDetail'; // Import the ProductDetail component
import ProductReview from '../components/ProductReview'; // Import the ProductReview component
import YouMightAlsoLike from '../components/YouMightAlsoLike'; // Import the YouMightAlsoLike component
import NewsletterSubscribe from '../components/NewsletterSubscribe'; // Import the NewsletterSubscribe component
import Footer from '../components/Footer'; // Import the Footer component

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

      {/* Render the ProductReview component */}
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <ProductReview productId={params.productId} />
      </Box>

      {/* Render the YouMightAlsoLike component */}
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <YouMightAlsoLike />
      </Box>

      {/* Render the NewsletterSubscribe component */}
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <NewsletterSubscribe />
      </Box>

      {/* Render the Footer component */}
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default ProductPage;
