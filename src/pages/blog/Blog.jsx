import { Container } from '@mui/material'
import React from 'react'
import PageTitle from '../../components/customeComponents/PagesTitle'

function Blog() {
  return (

    <Container>
      <PageTitle PageTitle={"Blog"} symbol={"/"} subTitle={"what I'm thinking about ?"} />
    </Container>
  )
}

export default Blog