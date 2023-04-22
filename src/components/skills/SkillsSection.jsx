import React, { useEffect, useState } from 'react'
import SectionTitle from '../customeComponents/SectionTitle'
import { Box, Container, Grid } from '@mui/material'
import SkillCard from './SkillCard'
import axios from 'axios'

function SkillsSection() {

  // fetching data:
  const baseUrl= "http://localhost:3010"
  
  useEffect(() => {
    getSkills()
   
}, [])



const getSkills = () => {
  axios.get(`${baseUrl}/skill/`)
      .then(res => {
        setSkills(res.data)
         
      })
      .catch((err) => {
        // Handle error
        console.log(err);
      });
}
const [skills, setSkills] = useState([])

  
  return (
    <Container >
      <SectionTitle SectionTitle={"My Skills"} link={"/about"} />
      <Container >
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <img src='./Group 36.png' alt='skills' />

            </Box>
          </Grid>
          <Grid item xs={12} md={2}>

          </Grid>
          <Grid item xs={12} md={7}>

            <Grid container spacing={1}>

              {skills.map(skill => {
                return (

                  <Grid item xs={12} sm={6} md={4} >
                    <SkillCard skill={skill}/>
                  </Grid>
                )
              })}















            </Grid>
          </Grid>


        </Grid>

      </Container>

    </Container>
  )
}

export default SkillsSection