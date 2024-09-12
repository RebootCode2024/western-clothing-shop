"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Slider,
  Button,
  Divider,
} from "@mui/material";

// Mock categories
const categories = [
  { label: "Casual", value: "casual" },
  { label: "Formal", value: "formal" },
  { label: "Party", value: "party" },
  { label: "Gym", value: "gym" },
];

// Color options
const colors = [
  { label: "Green", value: "green" },
  { label: "Red", value: "red" },
  { label: "Yellow", value: "yellow" },
  { label: "Orange", value: "orange" },
  { label: "Blue", value: "blue" },
  { label: "Pink", value: "pink" },
  { label: "Purple", value: "purple" },
  { label: "White", value: "white" },
];

// Size options
const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"];

const Filter = () => {
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [selectedColors, setSelectedColors] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleColorChange = (color) => {
    setSelectedColors((prev) => ({
      ...prev,
      [color]: !prev[color],
    }));
  };

  const handleSizeChange = (size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [size]: !prev[size],
    }));
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#fff", borderRadius: "10px" }}>
      <Typography variant="h6" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
        Filters
      </Typography>

      {/* Categories */}
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        Categories
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
        {categories.map((category) => (
          <Box
            key={category.value}
            sx={{
              padding: "5px 10px",
              borderRadius: "20px",
              border: selectedCategory === category.value ? "2px solid black" : "1px solid #ccc",
              cursor: "pointer",
              backgroundColor: selectedCategory === category.value ? "black" : "#f0f0f0",
              color: selectedCategory === category.value ? "white" : "black",
            }}
            onClick={() => handleCategoryChange(category.value)}
          >
            {category.label}
          </Box>
        ))}
      </Box>

      <Divider sx={{ marginY: "20px" }} />

      {/* Price Range */}
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        Price Range
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <Typography variant="body2">${priceRange[0]}</Typography>
        <Typography variant="body2">${priceRange[1]}</Typography>
      </Box>
      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={0}
        max={500}
        sx={{ marginBottom: "20px" }}
      />

      <Divider sx={{ marginY: "20px" }} />

      {/* Colors */}
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        Colors
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
        {colors.map((color) => (
          <Box
            key={color.value}
            sx={{
              width: "30px",
              height: "30px",
              backgroundColor: color.value,
              borderRadius: "50%",
              border: selectedColors[color.value] ? "3px solid black" : "1px solid #ccc",
              cursor: "pointer",
            }}
            onClick={() => handleColorChange(color.value)}
          />
        ))}
      </Box>

      <Divider sx={{ marginY: "20px" }} />

      {/* Sizes */}
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        Sizes
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {sizes.map((size) => (
          <Box
            key={size}
            sx={{
              padding: "5px 10px",
              borderRadius: "20px",
              border: selectedSizes[size] ? "2px solid black" : "1px solid #ccc",
              cursor: "pointer",
              backgroundColor: selectedSizes[size] ? "black" : "#f0f0f0",
              color: selectedSizes[size] ? "white" : "black",
            }}
            onClick={() => handleSizeChange(size)}
          >
            {size}
          </Box>
        ))}
      </Box>

      <Divider sx={{ marginY: "20px" }} />

      <Button
        variant="contained"
        sx={{
          marginTop: "20px",
          width: "100%",
          backgroundColor: "black",
          color: "white",
          borderRadius: "30px",
        }}
      >
        Apply Filter
      </Button>
    </Box>
  );
};

export default Filter;
