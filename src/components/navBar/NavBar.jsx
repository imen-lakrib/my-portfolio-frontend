import { Container } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const NavBar = () => {
  return (
    <Container sx={{display:"flex", justifyContent:"space-between", py:2}}>
        <Logo/>
        <Menu/>
    </Container>
  )
}

export default NavBar