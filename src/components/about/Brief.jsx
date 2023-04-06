import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

const Brief = () => {
  return (
    <Container>
       <Box color="primary.contrastText" >
       <Typography  >Hello, i’m Imen Lakrib!</Typography>

       <Typography sx={{py:2}} >I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. <br/> Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</Typography>
        <Button sx={{color:"#ffffff"}}  >Read More </Button>
    </Box>
    </Container>
  )
}

export default Brief