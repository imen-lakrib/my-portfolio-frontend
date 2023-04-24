import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
function Image() {
  return (
    <Box position="relative" >
      <Box sx={{ zIndex: 1, position: "absolute", top: {xs:"20px", md:"80px"}, right: {xs:"0px", md:"250px"} }}>
        <img src="./shape.png" alt='shape' />

      </Box>
      <Avatar variant="square" alt="imen lakrib" src="./myphoto-bg.png" sx={{ width: { xs: "250px", sm: "250px", md: '350px' }, height: { xs: "250px", sm: "250px", md: '350px' }, zIndex: 2, textAlign: "center" }} />
      <Box sx={{ border: "1px solid gray", p: 1, color: "primary.contrastText", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        <WorkHistoryIcon sx={{ color: "secondary.main", fontSize: "16px" }} />
        <Typography>Currently working on <span  style={{ color: "#ffffff" }}>Portfolio</span></Typography>
      </Box>
      <img style={{ zIndex: 3, position: "absolute", top: "250px", right: "30px" }} src="./Dots.png" alt='dots' />


    </Box>
  )

}

export default Image