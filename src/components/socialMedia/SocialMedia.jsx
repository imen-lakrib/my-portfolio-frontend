import { Box, IconButton } from '@mui/material'

import React, { useContext } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ContactsContext } from '../../contexts/ContactsContext';
function SocialMedia() {
  const contacts = useContext(ContactsContext);

  return (
    <Box sx={{ position: "fixed", top: "0px", left: "10px", color: "primary.contrastText" }}>

      <div style={{ alignItems: "center", flexDirection: "column", display: "flex" }}>
        <Box sx={{ borderLeft: '2px solid gray', height: '180px' }} />

        <IconButton  component="a"  href={`https://www.github.com/${contacts[0]?.github}`}  target="_blank" >
          <GitHubIcon />
        </IconButton>
        <IconButton  component="a"  href={`https://www.twitter.com/${contacts[0]?.twitter}`}  target="_blank" >
        <TwitterIcon  />
        </IconButton>

        <IconButton  component="a"  href={`https://www.linkedin.com/in/${contacts[0]?.linkedin}`}  target="_blank" >
        <LinkedInIcon />
        </IconButton>




      </div>


    </Box>
  )
}

export default SocialMedia