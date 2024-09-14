"use client";
import React, { useState, useContext, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase, IconButton, Box, Drawer, List, ListItem, ListItemText, Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { CartContext } from '../context/CartContext'; // Adjust the path to your CartContext
import Link from 'next/link'; // Import Link from Next.js
import { useRouter } from 'next/navigation'; // Import useRouter

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { cart } = useContext(CartContext); // Access the cart from CartContext
  const [isMounted, setIsMounted] = useState(false); // For hydration
  const router = useRouter(); // Initialize useRouter for navigation

  // Calculate the total number of items in the cart
  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    setIsMounted(true); // Set mounted to true after the component has mounted
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <ListItemText primary="Shop" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="On Sale" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="New Arrivals" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Brands" />
        </ListItem>
      </List>
    </Box>
  );

  const handleCartClick = () => {
    router.push('/cart'); // Navigate to the cart page
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ padding: '0', margin: '0' }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', padding: '0 10px' }}>
        
        {/* Left: Menu Icon and Logo (Mobile) / Logo with Links (Desktop) */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <IconButton 
            color="inherit" 
            sx={{ padding: '0', display: { xs: 'block', md: 'none' } }} // Show only on mobile
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" passHref> {/* Wrap SHOP.CO in Link */}
            <Typography variant="h6" sx={{ fontWeight: 'bold', padding: '0', cursor: 'pointer' }}>
              SHOP.CO
            </Typography>
          </Link>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' }, // Show only on desktop
              alignItems: 'center',
              gap: '20px',
              marginLeft: '20px',
            }}
          >
            <Button color="inherit">Shop</Button>
            <Button color="inherit">On Sale</Button>
            <Button color="inherit">New Arrivals</Button>
            <Button color="inherit">Brands</Button>
          </Box>
        </Box>

        {/* Right: Search (Mobile & Desktop) */}
        <Box 
          sx={{
            display: { xs: 'none', md: 'flex' }, // Show full search bar on desktop
            flexGrow: 1,
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#f0f0f0',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              padding: '5px 15px',
              width: '60%',
            }}
          >
            <SearchIcon />
            <InputBase
              placeholder="Search for products..."
              sx={{ marginLeft: 1, flex: 1 }}
            />
          </Box>
        </Box>

        {/* Right: Search Icon, Cart, and Profile (Mobile & Desktop) */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Mobile Search Icon */}
          <IconButton 
            color="inherit" 
            sx={{ padding: '0', display: { xs: 'block', md: 'none' } }} // Show only on mobile
          >
            <SearchIcon />
          </IconButton>

          {/* Cart Icon with Badge (notification dot) */}
          <IconButton color="inherit" sx={{ padding: '0' }} onClick={handleCartClick}> {/* Navigate to cart page */}
            <Badge badgeContent={isMounted ? totalCartItems : 0} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {/* Account Icon */}
          <IconButton color="inherit" sx={{ padding: '0' }}>
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
