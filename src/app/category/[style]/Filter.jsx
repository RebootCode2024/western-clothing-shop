"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
} from "@mui/material";

const Filter = ({ onFilterChange }) => {
  // State for filter options
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  // Handle price range change
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  // Handle color selection change
  const handleColorChange = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  // Handle size selection change
  const handleSizeChange = (size) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };

  // Apply filters
  const applyFilters = () => {
    onFilterChange({
      priceRange,
      selectedColors,
      selectedSizes,
    });
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "20px" }}>
        Filters
      </Typography>

      {/* Price Filter */}
      <Typography>Price Range</Typography>
      <Slider
        value={priceRange}
        min={50}
        max={200}
        step={10}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        sx={{ marginBottom: "20px" }}
      />

      {/* Colors Filter */}
      <Typography>Colors</Typography>
      <FormGroup row>
        {["red", "blue", "green", "yellow", "black", "white"].map((color) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedColors.includes(color)}
                onChange={() => handleColorChange(color)}
              />
            }
            label={color.charAt(0).toUpperCase() + color.slice(1)}
            key={color}
          />
        ))}
      </FormGroup>

      {/* Sizes Filter */}
      <Typography>Sizes</Typography>
      <FormGroup row>
        {["S", "M", "L", "XL"].map((size) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedSizes.includes(size)}
                onChange={() => handleSizeChange(size)}
              />
            }
            label={size}
            key={size}
          />
        ))}
      </FormGroup>

      {/* Apply Filters Button */}
      <Button variant="contained" sx={{ marginTop: "20px" }} onClick={applyFilters}>
        Apply Filter
      </Button>
    </Box>
  );
};

export default Filter;
