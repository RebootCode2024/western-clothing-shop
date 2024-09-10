"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Card, CardContent, Button, useMediaQuery } from "@mui/material";
import Rating from "@mui/material/Rating";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const reviews = [
  {
    name: "Samantha D.",
    date: "August 14, 2023",
    review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    rating: 5,
  },
  {
    name: "Alex M.",
    date: "August 15, 2023",
    review: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I’m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    rating: 5,
  },
  {
    name: "Ethan R.",
    date: "August 16, 2023",
    review: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    rating: 4.5,
  },
  {
    name: "Olivia P.",
    date: "August 17, 2023",
    review: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    rating: 4.5,
  },
  {
    name: "Liam K.",
    date: "August 18, 2023",
    review: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    rating: 5,
  },
  {
    name: "Ava H.",
    date: "August 19, 2023",
    review: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    rating: 5,
  },
];

const ProductReview = ({ productId }) => {
  const isMobile = useMediaQuery('(max-width:600px)'); // Define mobile based on width
  const [visibleReviews, setVisibleReviews] = useState(isMobile ? 3 : 6);

  useEffect(() => {
    // Dynamically update visible reviews when the screen size changes
    setVisibleReviews(isMobile ? 3 : 6);
  }, [isMobile]);

  const handleLoadMore = () => {
    setVisibleReviews((prevCount) => prevCount + (isMobile ? 3 : 6)); // Load more based on mobile/desktop
  };

  return (
    <Box sx={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}>
        Customer Reviews
      </Typography>

      {/* Review Grid */}
      <Grid container spacing={4}>
        {reviews.slice(0, visibleReviews).map((review, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card sx={{ borderRadius: '12px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }}>
              <CardContent>
                {/* Rating */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Rating value={review.rating} precision={0.5} readOnly />
                  <CheckCircleIcon sx={{ color: "green", fontSize: "16px", ml: 1 }} />
                </Box>

                {/* Reviewer Name */}
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {review.name}
                </Typography>

                {/* Review Content */}
                <Typography variant="body2" sx={{ mb: 2, color: "#555" }}>
                  {review.review}
                </Typography>

                {/* Review Date */}
                <Typography variant="caption" sx={{ color: "#888" }}>
                  Posted on {review.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Load More Reviews Button */}
      {visibleReviews < reviews.length && (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button variant="outlined" size="large" onClick={handleLoadMore}>
            Load More Reviews
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ProductReview;
