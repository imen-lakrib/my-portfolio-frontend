import React, { useContext } from 'react'
import SectionTitle from '../customeComponents/SectionTitle'
import { Container, Grid } from '@mui/material'
import ProjectCard from './ProjectCard'
import { ProjectsContext } from '../../contexts/ProjectsContext';
import Loader from '../Loader';

function ProjectsSection() {
  const {projects, isLoading} = useContext(ProjectsContext);
  const firstThree = projects.slice(0, 3)

  return (
    <Container>
      <SectionTitle SectionTitle={"Latest Projects"} link={"/works"} />
      {isLoading? <Loader/>: (<Grid container spacing={4}>
        {firstThree.map((project, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>)}


    </Container>
  )
}

export default ProjectsSection