import { Container } from '@mui/material'
import React from 'react'
import Descreption from './Descreption'
import Image from './Image'
import Quote from './Quote'

function HeroSection() {
  return (
    <>
    <Container sx={{alignItems:"center", justifyContent:"space-between", py:5,
    display:{xs:"block", sm:"flex", md:'flex'}}}  color="primary.contrastText">
        <Descreption/>
        <Image/>
    </Container>
    <Quote/>

    
    </>
  )
}

export default HeroSection