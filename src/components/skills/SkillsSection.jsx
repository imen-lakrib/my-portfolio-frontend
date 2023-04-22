import React from 'react'
import SectionTitle from '../customeComponents/SectionTitle'
import {  Box, Container, Grid } from '@mui/material'
import SkillCard from './SkillCard'

function SkillsSection() {
  return (
    <Container >
      <SectionTitle SectionTitle={"My Skills"} link={"/about"} />
      <Container >
        <Grid container spacing={4}>
          <Grid item xs={12}  md={3}>
            <Box sx={{display:{xs:"none", md:"block"}}}>
            <img src='./Group 36.png' alt='skills' />

            </Box>
          </Grid>
          <Grid item xs={12} md={2}>

          </Grid>
          <Grid item xs={12} md={7}>

            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={4} >
                <SkillCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4} >
                <SkillCard />
              </Grid>
              

              <Grid item xs={12} sm={6} md={4} >
                <SkillCard />
              </Grid>
              

              <Grid item xs={12} sm={6} md={4} >
                <SkillCard />
              </Grid>
              

              <Grid item xs={12} sm={6} md={4} >
                <SkillCard />
              </Grid>
              

              


            </Grid>
          </Grid>


        </Grid>

      </Container>

    </Container>
  )
}

export default SkillsSection