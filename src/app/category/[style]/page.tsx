import React from "react";
import { Box, Typography } from "@mui/material";

// Mock data for category details
const categoryData: Record<string, { name: string; description: string; imageUrl: string }> = {
  casual: {
    name: "Casual",
    description: "Explore our collection of casual wear for everyday comfort.",
    imageUrl: "/assets/casual-desktop.png",
  },
  formal: {
    name: "Formal",
    description: "Shop our formal wear for business meetings or events.",
    imageUrl: "/assets/formal-desktop.png",
  },
  party: {
    name: "Party",
    description: "Stand out at any event with our party wear collection.",
    imageUrl: "/assets/party-desktop.png",
  },
  gym: {
    name: "Gym",
    description: "Get ready to train with our comfortable gym wear.",
    imageUrl: "/assets/gym-desktop.png",
  },
};

interface CategoryPageProps {
  params: {
    style: string;
  };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  const { style } = params;

  // Safely access the category data
  const category = categoryData[style];

  // Return 404 if category not found
  if (!category) {
    return (
      <Typography variant="h4" sx={{ textAlign: 'center', marginTop: '20px' }}>
        Category not found
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f5f5f5", borderRadius: "10px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
        {category.name} Collection
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        {category.description}
      </Typography>
      <img
        src={category.imageUrl}
        alt={category.name}
        style={{ width: "100%", height: "auto", borderRadius: "10px" }}
      />
    </Box>
  );
};

export default CategoryPage;
