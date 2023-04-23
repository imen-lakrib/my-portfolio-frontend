import { Container, Grid } from '@mui/material'
import React, { useContext } from 'react'
import PageTitle from '../../components/customeComponents/PagesTitle'
import ProjectCard from '../../components/projects/ProjectCard'
import { ProjectsContext } from '../../contexts/ProjectsContext'



function Works() {
    const projects = useContext(ProjectsContext)

    return (
        <Container>
            <PageTitle PageTitle={"my-projects"} symbol={"/"} subTitle={"List of my projects"} />
            <Grid container spacing={4}>
                {projects.map(project=>{
                    return(
                        <Grid item xs={12} md={4}>
                        <ProjectCard project={project}/>
    
                    </Grid>

                    )
                })}
               


            </Grid>

        </Container>
    )
}

export default Works