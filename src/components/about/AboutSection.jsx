import React from 'react'
import SectionTitle from '../customeComponents/SectionTitle'
import { Container, Grid } from '@mui/material'
import Brief from './Brief'
import Quote from './Quote'

const AboutSection = () => {
  return (
    <Container>
      <SectionTitle SectionTitle={"Who am i !"} link={"/about"}/>
      <Grid container spacing={4}>
        <Grid item xs={12}  md={6}>
          <Brief/>
        </Grid>
        <Grid item xs={0} md={2}>
        </Grid>
        <Grid item xs={12} md={4}>
          <Quote/>
        </Grid>
       
      </Grid>


    </Container>
  )
}

export default AboutSection