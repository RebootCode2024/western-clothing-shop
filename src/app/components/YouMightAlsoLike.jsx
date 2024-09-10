"use client";

import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent, Rating } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Product data
const products = [
  {
    name: "Polo with Contrast Trims",
    rating: 4.0,
    price: "$212",
    originalPrice: "$242",
    discount: "-20%",
    imageUrl: "/assets/you-might-like/polo-contrast-trims.png",
  },
  {
    name: "Gradient Graphic T-shirt",
    rating: 3.5,
    price: "$145",
    originalPrice: "",
    discount: "",
    imageUrl: "/assets/you-might-like/gradient-graphic-tshirt.png",
  },
  {
    name: "Polo with Tipping Details",
    rating: 4.5,
    price: "$180",
    originalPrice: "",
    discount: "",
    imageUrl: "/assets/you-might-like/polo-tipping-details.png",
  },
  {
    name: "Black Striped T-shirt",
    rating: 5.0,
    price: "$120",
    originalPrice: "$150",
    discount: "-30%",
    imageUrl: "/assets/you-might-like/black-striped-tshirt.png",
  },
];

const YouMightAlsoLike = () => {
  return (
    <Box sx={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}>
        You Might Also Like
      </Typography>

      {/* Swiper Carousel for mobile, Grid for desktop */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ maxWidth: 345, borderRadius: "12px", boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)" }}>
              <CardMedia component="img" height="140" image={product.imageUrl} alt={product.name} />
              <CardContent>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {product.name}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <Rating value={product.rating} precision={0.5} readOnly />
                  <Typography variant="body2">{product.rating}/5</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography variant="h6">{product.price}</Typography>
                  {product.originalPrice && (
                    <Typography variant="body2" sx={{ textDecoration: "line-through", color: "#888" }}>
                      {product.originalPrice}
                    </Typography>
                  )}
                  {product.discount && (
                    <Typography variant="body2" sx={{ color: "red" }}>
                      {product.discount}
                    </Typography>
                  )}
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default YouMightAlsoLike;
