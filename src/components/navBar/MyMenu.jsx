import { Box, Typography, IconButton, MenuItem, Drawer } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import TagIcon from '@mui/icons-material/Tag';

function MyMenu() {
  const menuItems = [
    { path: "/", name: "Home" },
    { path: "/works", name: "Work" },
    { path: "/about", name: "About" },
    { path: "/blog", name: "Blog" },
  ];

  const { pathname } = useLocation();
  const [activeItem, setActiveItem] = useState('');
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setOpenDrawer(false);
  };

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
        <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="top"
          open={openDrawer}
          onClose={handleDrawerClose}

        >
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              style={{ textDecoration: "none", color: "#000000" }}
              onClick={() => handleItemClick(item.path)}
            >
              <MenuItem
                selected={activeItem === item.path || pathname === item.path}
                onClick={handleDrawerClose}
              >
                <TagIcon sx={{ color: "secondary.main", fontSize: "16px", mr: 1 }} />
                <Typography>{item.name}</Typography>
              </MenuItem>
            </NavLink>
          ))}
        </Drawer>
       

      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            onClick={() => handleItemClick(item.path)}
            style={{
              color: activeItem === item.path || pathname === item.path ? "#ffffff" : "#ABB2BF",
              textDecoration: "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "0 10px"
            }}
          >
            <TagIcon sx={{ color: "secondary.main", fontSize: "16px", mr: 1 }} />
            <Typography sx={{ fontWeight: activeItem === item.path || pathname === item.path ? "800" : "400" }}>{item.name}</Typography>
          </NavLink>
        ))}
      </Box>
    </Box>
  )
}

export default MyMenu;
