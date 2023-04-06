import { Box, Typography } from '@mui/material'
import React from 'react'

function Logo() {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" color="primary.light" >
        <img src='/Logo.png' alt='logo'/>
        <Typography sx={{fontWeight:"700", px:1}}> Imen Lakrib</Typography>

    </Box>
  )
}

export default Logo