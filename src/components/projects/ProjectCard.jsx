
import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function ProjectCard({project}) {

  //     backgroundImage: `url("./Rectangle 22.jpg")`,
  
  const styles = {
    // backgroundImage: `url("/uploads/${project?.image}")`,
    backgroundImage: `url("/uploads/"+project?.image)`,

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

          <Typography sx={{p:1}} >
              {project?.technologies?.split(",").map(technology=>{
                return(
                  <span>{technology}</span>
                )
              })}
              
          </Typography>

            <Box sx={{ borderTop: '1px solid gray', width: '100%' }}/>
            <Typography sx={{px:2, fontWeight:500, fontSize:"25px", color:"white"}}>{project?.title}</Typography>
            <Typography sx={{px:2}}>{project?.description}</Typography>
            <Button component="a" href={project?.link} target="_blank"  sx={{color:"#ffffff", m:2}}  >Contact Me !!</Button>




        </Box>
    </div>
  )
}

export default ProjectCard




