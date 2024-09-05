"use client";
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase, IconButton, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
          <Typography variant="h6" sx={{ fontWeight: 'bold', padding: '0' }}>
            SHOP.CO
          </Typography>
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
          <IconButton color="inherit" sx={{ padding: '0' }}>
            <ShoppingCartIcon />
          </IconButton>
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
