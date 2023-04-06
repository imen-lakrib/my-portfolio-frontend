import { Box, IconButton } from '@mui/material'

import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function SocialMedia() {
  return (
    <Box sx={{ position: "fixed", top: "0px", left: "10px", color: "primary.contrastText" }}>

      <div style={{ alignItems: "center", flexDirection: "column", display: "flex" }}>
        <Box sx={{ borderLeft: '2px solid gray', height: '180px' }} />

        <IconButton  component="a" href="https://github.com/imen-lakrib" target="_blank" >
          <GitHubIcon />
        </IconButton>
        <IconButton  component="a" href="https://twitter.com/imen_lakrib" target="_blank" >
        <TwitterIcon  />
        </IconButton>

        <IconButton  component="a" href="https://www.linkedin.com/in/imenlakrib/" target="_blank" >
        <LinkedInIcon />
        </IconButton>




      </div>


    </Box>
  )
}

export default SocialMedia