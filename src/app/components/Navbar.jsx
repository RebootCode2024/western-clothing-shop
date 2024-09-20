"use client";
import React, { useState, useContext, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase, IconButton, Box, Drawer, List, ListItem, ListItemText, Badge, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { CartContext } from '../context/CartContext'; 
import Link from 'next/link'; 
import { useRouter } from 'next/navigation'; 
import { useSession, signIn, signOut } from 'next-auth/react'; 

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { cart } = useContext(CartContext); 
  const [isMounted, setIsMounted] = useState(false); 
  const router = useRouter(); 
  const { data: session } = useSession(); 

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    setIsMounted(true);
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
    router.push('/cart'); 
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ padding: '0', margin: '0' }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', padding: '0 10px' }}>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <IconButton 
            color="inherit" 
            sx={{ padding: '0', display: { xs: 'block', md: 'none' } }} 
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" passHref>
            <Typography variant="h6" sx={{ fontWeight: 'bold', padding: '0', cursor: 'pointer' }}>
              SHOP.CO
            </Typography>
          </Link>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
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

        <Box 
          sx={{
            display: { xs: 'none', md: 'flex' }, 
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

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <IconButton 
            color="inherit" 
            sx={{ padding: '0', display: { xs: 'block', md: 'none' } }} 
          >
            <SearchIcon />
          </IconButton>

          <IconButton color="inherit" sx={{ padding: '0' }} onClick={handleCartClick}>
            <Badge badgeContent={isMounted ? totalCartItems : 0} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {session ? (
            <IconButton color="inherit" onClick={() => signOut()}>
              <Avatar src={session.user.image} alt={session.user.name} />
            </IconButton>
          ) : (
            <IconButton color="inherit" onClick={() => signIn()}>
              <AccountCircleIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
