"use client";
import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import Filter from "./Filter"; // Assuming Filter component is created in Filter.jsx

// Updated mock product data with images from your assets folder
const casualProducts = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    originalPrice: 242,
    discount: "-20%",
    rating: 3.5,
    imageUrl: "/assets/you-might-like/gradient-graphic-tshirt.png",
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    price: 180,
    originalPrice: 242,
    discount: "-20%",
    rating: 4.5,
    imageUrl: "/assets/you-might-like/polo-tipping-details.png",
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    price: 120,
    originalPrice: 150,
    discount: "-30%",
    rating: 4.0,
    imageUrl: "/assets/you-might-like/black-striped-tshirt.png",
  },
  {
    id: 4,
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    discount: "-20%",
    rating: 3.5,
    imageUrl: "/assets/Skinny Fit Jeans-desktop.png",
  },
  {
    id: 5,
    name: "Checkered Shirt",
    price: 180,
    originalPrice: null,
    discount: null,
    rating: 4.5,
    imageUrl: "/assets/Checkered Shirt-desktop.png",
  },
  {
    id: 6,
    name: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    discount: "-30%",
    rating: 4.5,
    imageUrl: "/assets/Sleeve Striped T-shirt-desktop.png",
  },
  {
    id: 7,
    name: "Vertical Striped Shirt",
    price: 212,
    originalPrice: 232,
    discount: "-20%",
    rating: 4.0,
    imageUrl: "/assets/Vertical Striped Shirt-desktop.png",
  },
  {
    id: 8,
    name: "Courage Graphic T-shirt",
    price: 145,
    originalPrice: null,
    discount: null,
    rating: 4.0,
    imageUrl: "/assets/Courage Graphic T-shirt-desktop.png",
  },
  {
    id: 9,
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    originalPrice: null,
    discount: null,
    rating: 4.0,
    imageUrl: "/assets/Loose Fit Bermuda Shorts-desktop.png",
  },
];

const CategoryComp = ({ products = casualProducts }) => {
  const [sortOption, setSortOption] = useState("mostPopular");

  // Handle sorting
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  // Memoized sorted products
  const sortedProducts = useMemo(() => {
    switch (sortOption) {
      case "lowestPrice":
        return [...products].sort((a, b) => a.price - b.price);
      case "highestPrice":
        return [...products].sort((a, b) => b.price - a.price);
      case "newest":
        return [...products]; // Assuming products are already in order of newest
      default:
        return products; // Most popular or default
    }
  }, [products, sortOption]);

  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* Filter Component on the left */}
      <Box sx={{ width: "20%", marginRight: "20px" }}>
        <Filter />
      </Box>

      {/* Product Grid and Sorting Options */}
      <Box sx={{ flex: 1, backgroundColor: "#f5f5f5", borderRadius: "10px", padding: "20px" }}>
        {/* Category Info */}
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
          Casual Collection
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          Explore our collection of casual wear for everyday comfort.
        </Typography>

        {/* Filter and Sorting Options */}
        <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Sort By</InputLabel>
            <Select value={sortOption} onChange={handleSortChange}>
              <MenuItem value="mostPopular">Most Popular</MenuItem>
              <MenuItem value="lowestPrice">Lowest Price</MenuItem>
              <MenuItem value="highestPrice">Highest Price</MenuItem>
              <MenuItem value="newest">Newest</MenuItem>
            </Select>
          </FormControl>

          {/* Button for Filter Modal */}
          <Button variant="outlined">Filter</Button>
        </Box>

        {/* Product Grid */}
        <Grid container spacing={3}>
          {sortedProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Box
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "10px",
                  textAlign: "center",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    marginBottom: "10px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginBottom: "10px" }}
                >
                  {product.name}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: "10px" }}>
                  ${product.price}{" "}
                  {product.originalPrice && (
                    <span style={{ textDecoration: "line-through" }}>
                      ${product.originalPrice}
                    </span>
                  )}
                  {product.discount && (
                    <span style={{ color: "red", marginLeft: "5px" }}>
                      {product.discount}
                    </span>
                  )}
                </Typography>
                <Typography variant="body2">
                  Rating: {product.rating}/5
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Button variant="outlined">Load More</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryComp;
