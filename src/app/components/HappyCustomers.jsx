"use client"; // Mark this component as a client-side component

import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Rating from "@mui/material/Rating";
import dynamic from "next/dynamic";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Lazy load Slider to ensure it only runs on the client-side
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

// Mock customer data
const customers = [
  {
    name: "Sarah M.",
    rating: 5,
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    rating: 4,
    review:
      "Finding clothes that align with my style was a challenge until I discovered Shop.co. The variety they offer is remarkable.",
  },
  {
    name: "James L.",
    rating: 4.5,
    review:
      "The selection is not only diverse but also on-point with the latest trends. I'm thrilled to have found Shop.co!",
  },
];

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const HappyCustomers = () => {
  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}>
        OUR HAPPY CUSTOMERS
      </Typography>

      {/* Conditionally render the Slider only in the browser */}
      <Slider {...sliderSettings}>
        {customers.map((customer, index) => (
          <Card
            key={index}
            sx={{
              margin: "0 10px",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              height: "250px", // Ensuring all cards have the same height
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between", // Aligns content with equal space
              overflow: "hidden", // Ensures content doesn't overflow
            }}
          >
            <CardContent>
              <Rating value={customer.rating} precision={0.5} readOnly sx={{ textAlign: "left" }} />
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mt: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginRight: '5px', textAlign: 'left' }}>
                  {customer.name}
                </Typography>
                <CheckCircleIcon sx={{ color: "green", fontSize: "16px" }} />
              </Box>
              <Typography
                variant="body2"
                sx={{ mt: 2, color: "#666", textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis' }}
              >
                "{customer.review}"
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default HappyCustomers;
