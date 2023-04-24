import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Brief = () => {
  return (
    <Container>
       <Box color="primary.contrastText" >
       <Typography  >Hello, i’m Imen Lakrib!</Typography>

       <Typography sx={{py:2}} >I’m a self-taught Full-stack web developer based in Algiers, algeria. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. <br/> Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</Typography>
        <Button component={Link} to="/about" sx={{color:"#ffffff"}}  >Read More </Button>
    </Box>
    </Container>
  )
}

export default Brief