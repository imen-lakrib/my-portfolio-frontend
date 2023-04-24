import React, { useContext, useEffect, useState } from 'react'
import SectionTitle from '../customeComponents/SectionTitle'
import { Box, Container, Grid } from '@mui/material'
import SkillCard from './SkillCard'
import { SkillsContext } from '../../contexts/SkillsContext';
import Loader from '../Loader';

function SkillsSection() {

  const { skills, isLoading } = useContext(SkillsContext);






  return (
    <Container >
      <SectionTitle SectionTitle={"My Skills"} link={"/about"} />
      <Container >
        <Grid container spacing={4}>
          <Grid item xs={12} md={2}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <img src='./Group 36.png' alt='skills' />

            </Box>
          </Grid>
          <Grid item xs={12} md={2}>

          </Grid>
          <Grid item xs={12} md={8}>

            {isLoading ? <Loader /> : (<Grid container spacing={1}>
              {skills.map((skill, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <SkillCard skill={skill} />
                </Grid>
              ))}
            </Grid>)}
          </Grid>


        </Grid>

      </Container>

    </Container>
  )
}

export default SkillsSection