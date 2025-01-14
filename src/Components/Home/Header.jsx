import React from 'react';
import { AppBar, Toolbar, IconButton, Box, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';
import world from '../../assets/Vector.png';
import login from '../../assets/SVG.png';
import Button from '../Button/Button.jsx';
import './Header.css'

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
 
  // Mobile menu toggle
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ background: '#333', color: '#fff' }}>
      <Toolbar>
        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, cursor: 'pointer', minWidth: 0 }}>
        <img 
          src={logo} 
          alt="logo" 
          style={{ 
            maxWidth: '80px', 
            height: 'auto', 
            maxHeight: '60px',
            objectFit: 'contain' 
          }} 
        />
      </Box>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '2rem' }}>
          
        <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="program" smooth={true} duration={500}>
              Program
            </Link>
          </li>
          <li>
            <Link to="pricing" smooth={true} duration={500}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>

          <Button name={'EN'} image={world}/>
          <Button name={'Log in'} image={login} onClick={handleLoginClick}/>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          
          sx={{ display: { md: 'none' } }}
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}  
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              backgroundColor: '#333', 
              color: '#fff',      
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', 
            },
          }}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="about" smooth={true} duration={500}>
              About Us
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="program" smooth={true} duration={500}>
              Program
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="pricing" smooth={true} duration={500}>
              Pricing
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Button name={'EN'} image={world} />
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Button name={'Log in'} image={login} onClick={handleLoginClick}/>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;


