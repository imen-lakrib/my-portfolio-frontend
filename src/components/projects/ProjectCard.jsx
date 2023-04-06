
import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function ProjectCard() {

  //     backgroundImage: `url("./Rectangle 22.jpg")`,

  const styles = {
    backgroundImage: `url("./Rectangle 22.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '150px',
    width: '100%',
    '@media (max-width: 600px)': {
      height: '200px',
      width: '100%',
    },
  };

  return (
    <div>
        <Box sx={{border:"1px solid gray", margin:2 ,color:"gray"}}>
          <Box sx={styles}>

          </Box>

            <Typography sx={{p:1}} ><span>tech</span> <span>tech</span> <span>tech</span></Typography>


            <Box sx={{ borderTop: '1px solid gray', width: '100%' }}/>
            <Typography sx={{px:2, fontWeight:500, fontSize:"25px", color:"white"}}>title</Typography>
            <Typography sx={{px:2}}>tech</Typography>
            <Button sx={{color:"#ffffff", m:2}}  >Contact Me !!</Button>




        </Box>
    </div>
  )
}

export default ProjectCard




