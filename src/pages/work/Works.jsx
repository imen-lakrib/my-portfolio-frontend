import { Container, Grid } from '@mui/material'
import React from 'react'
import PageTitle from '../../components/customeComponents/PagesTitle'
import ProjectCard from '../../components/projects/ProjectCard'

function Works() {
    return (
        <Container>
            <PageTitle PageTitle={"my-projects"} symbol={"/"} subTitle={"List of my projects"} />
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <ProjectCard />

                </Grid>


            </Grid>

        </Container>
    )
}

export default Works