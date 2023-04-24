import { Box, Button, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ContactsContext } from '../../contexts/ContactsContext';


function Descreption() {

  const contacts = useContext(ContactsContext);

  return (
    <Box color="primary.light" >
        <Typography sx={{fontWeight:"600", fontSize:"32px"}}>Hi I'am  <span style={{color:"#FFDF39"}}>{contacts[0]?.fullName} a web dev</span>.. specialiste in <span style={{color:"#FFDF39"}}>MERN</span>  stack;</Typography>
        <Typography sx={{py:2}} color="primary.contrastText">Experienced web developer specialized in MERN stack, <br/> proficient in developing and deploying full-stack web applications.</Typography>
        <Button component={Link} to="/contact" sx={{color:"#ffffff"}}   >Contact Me !!</Button>
    </Box>
  )
}

export default Descreption