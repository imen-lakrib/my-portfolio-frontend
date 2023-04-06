import React from 'react'
import SectionTitle from '../customeComponents/SectionTitle'
import {  Container, Grid } from '@mui/material'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  return (
    <Container>
      <SectionTitle SectionTitle={"Latest Projects"} link={"/works"}/>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <ProjectCard />

        </Grid>
        <Grid item xs={12} md={4}>
          <ProjectCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <ProjectCard />

        </Grid>

      </Grid>


    </Container>
  )
}

export default ProjectsSection