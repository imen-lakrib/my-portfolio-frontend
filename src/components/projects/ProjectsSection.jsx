import React, { useContext } from 'react'
import SectionTitle from '../customeComponents/SectionTitle'
import {  Container, Grid } from '@mui/material'
import ProjectCard from './ProjectCard'
import { ProjectsContext } from '../../contexts/ProjectsContext';

function ProjectsSection() {
  const projects = useContext(ProjectsContext);

  return (
    <Container>
      <SectionTitle SectionTitle={"Latest Projects"} link={"/works"}/>
      <Grid container spacing={4}>
        {projects.map(project=>{
          return(
            <Grid item xs={12} md={4}>
          <ProjectCard project={project} />

        </Grid>

          )
        })}
        
      

      </Grid>


    </Container>
  )
}

export default ProjectsSection