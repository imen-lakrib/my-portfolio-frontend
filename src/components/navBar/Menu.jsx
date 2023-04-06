import {  Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import {  NavLink } from 'react-router-dom'
import { useLocation } from "react-router-dom"; 

import TagIcon from '@mui/icons-material/Tag';
function Menu() {
    const { pathname } = useLocation(); 
    // const [isActive, setIsActive] = useState(false);
    const [activeItem, setActiveItem] = useState('');
    const handleItemClick = (item) => {
        setActiveItem(item);
      };

        return (
        <Box fontSize="16px" fontWeight="400" sx={{display:{ xs: 'none', md: 'flex' }}}  justifyContent="space-between" alignItems="center" color="primary.contrastText" >
            <NavLink to='/'  onClick={() => handleItemClick('/')}  style={{  color: activeItem === '/'  || pathname === "/" ? "#ffffff" : "#ABB2BF", textDecoration:"none", display: "flex", justifyContent: "space-between", alignItems: "center" , margin:"0 10px"}}>
                <TagIcon sx={{ color: "secondary.main" , fontSize:"16px"}} />
                <Typography sx={{fontWeight: activeItem === '/'  || pathname === "/" ? "800" : "400"}}>Home</Typography>
            </NavLink>
            <NavLink to='/works' onClick={() => handleItemClick('/works')}  style={{  color: activeItem === '/works'  || pathname === "/works" ? "#ffffff" : "#ABB2BF", textDecoration:"none", display: "flex", justifyContent: "space-between", alignItems: "center" , margin:"0 10px"}}>
                <TagIcon sx={{ color: "secondary.main", fontSize:"16px" }} />
                <Typography sx={{fontWeight: activeItem === '/works'  || pathname === "/" ? "800" : "400"}}>works</Typography>
            </NavLink>
            <NavLink to='/about' onClick={() => handleItemClick('/about')}  style={{ color: activeItem === '/about'  || pathname === "/about" ? "#ffffff" : "#ABB2BF", textDecoration:"none", display: "flex", justifyContent: "space-between", alignItems: "center", margin:"0 10px" }}>
                <TagIcon sx={{ color: "secondary.main", fontSize:"16px" }} />
                <Typography sx={{fontWeight: activeItem === '/about'  || pathname === "/" ? "800" : "400"}}>about</Typography>
            </NavLink>
            <NavLink to='/blog'onClick={() => handleItemClick('/blog')}  style={{  color: activeItem === '/blog'  || pathname === "/blog" ? "#ffffff" : "#ABB2BF", textDecoration:"none", display: "flex", justifyContent: "space-between", alignItems: "center", margin:"0 10px" }}>
                <TagIcon sx={{ color: "secondary.main", fontSize:"16px" }} />
                <Typography sx={{fontWeight: activeItem === '/blog'  || pathname === "/" ? "800" : "400"}}>blog</Typography>
            </NavLink>
            <NavLink to='/contact' onClick={() => handleItemClick('/contact')}  style={{ color: activeItem === '/contact'  || pathname === "/contact" ? "#ffffff" : "#ABB2BF", textDecoration:"none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <TagIcon sx={{ color: "secondary.main", fontSize:"16px" }} />
                <Typography sx={{fontWeight: activeItem === '/contact'  || pathname === "/" ? "800" : "400"}}>ContactMe</Typography>
            </NavLink>
        </Box>
    )
}

export default Menu