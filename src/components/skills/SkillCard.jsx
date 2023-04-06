import { Box, Typography } from '@mui/material'
import React from 'react'

function SkillCard() {
  return (
    <div>
        <Box sx={{border:"1px solid gray", margin:2 ,color:"gray"}}>


        <Typography sx={{px:2, fontWeight:500, fontSize:"25px", color:"white"}}>title</Typography>

            <Box sx={{ borderTop: '1px solid gray', width: '100%' }}/>
            <Typography sx={{p:1}} ><span>tech</span> <span>tech</span> <span>tech</span></Typography>





        </Box>
    </div>
  )
}

export default SkillCard


