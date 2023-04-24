import { Container } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import MyMenu from './MyMenu'

const NavBar = () => {
  return (
    <Container sx={{display:"flex", justifyContent:"space-between", py:2}}>
        <Logo/>
        <MyMenu/>
    </Container>
  )
}

export default NavBar