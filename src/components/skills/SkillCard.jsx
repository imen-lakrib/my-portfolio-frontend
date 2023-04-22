import { Box, Typography } from '@mui/material'
import React from 'react'

function SkillCard({skill}) {

  
  return (
    <div>
        <Box sx={{border:"1px solid gray", margin:2 ,color:"gray"}}>


        <Typography sx={{px:2, fontWeight:500, fontSize:"25px", color:"white"}}>{skill?.title}</Typography>

            <Box sx={{ borderTop: '1px solid gray', width: '100%' }}/>
            <Typography sx={{p:1}} >
              {skill?.technologies?.split(",").map(technology=>{
                return(
                  <span>{technology}</span>
                )
              })}
              
          </Typography>





        </Box>
    </div>
  )
}

export default SkillCard


