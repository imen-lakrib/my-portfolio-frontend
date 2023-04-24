import { Box, Typography } from '@mui/material'
import React from 'react'

function Logo() {
  return (
    <Box sx={{
     
      textDecoration: 'none',
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-2px',
        left: 0,
        width: '0%',
        height: '2px',
        backgroundColor: '#FFDF39',
        transition: 'width 0.3s ease',
      },
      '&:hover::after': {
        width: '100%',
      },
    }} display="flex" justifyContent="space-between" alignItems="center" color="primary.light" >
        <img src='/Logo.png' alt='logo'/>
        <Typography sx={{fontWeight:"700", px:1}}> Imen Lakrib</Typography>

    </Box>
  )
}

export default Logo