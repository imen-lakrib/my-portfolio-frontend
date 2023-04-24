import { Container, Grid } from '@mui/material'
import React, { useContext } from 'react'
import PageTitle from '../../components/customeComponents/PagesTitle'
import ProjectCard from '../../components/projects/ProjectCard'
import { ProjectsContext } from '../../contexts/ProjectsContext'
import Loader from '../../components/Loader'



function Works() {
    const {projects, isLoading} = useContext(ProjectsContext)

    return (
        <Container>
            <PageTitle PageTitle={"my-projects"} symbol={"/"} subTitle={"List of my projects"} />
            {isLoading? <Loader/>:(<Grid container spacing={4}>
                {projects.map((project, index)=>{
                    return(
                        <Grid key={index} item xs={12} md={4}>
                        <ProjectCard project={project}/>
    
                    </Grid>

                    )
                })}
               


            </Grid>)}
            

        </Container>
    )
}

export default Works