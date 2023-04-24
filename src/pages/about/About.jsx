import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import PageTitle from '../../components/customeComponents/PagesTitle'
import SkillCard from '../../components/skills/SkillCard'
import VerticalLinearStepper from '../../components/stepper/VerticalLinearStepper'
import EducationStepper from '../../components/stepper/EducationStepper'
import { SkillsContext } from '../../contexts/SkillsContext'
import Loader from '../../components/Loader'

function About() {

  const { skills, isLoading } = useContext(SkillsContext);

  return (
    <Container>
      <Box sx={{ p: 4 }}>
        <PageTitle PageTitle={"about-me"} symbol={"/"} subTitle={"Who am i ?"} />
        <Grid container spacing={4} >
          <Grid item >
            <Box color="primary.contrastText" >
              <Typography  >Hello, i’m Imen Lakrib!</Typography>

              <Typography  >
                I'm a web developer specializing in the #MERN-stack.
                My love for learning is a distinguishing feature,
                and programming offers endless learning opportunities,
                making it the perfect fit for me. I've enjoyed exploration
                and problem-solving since childhood, and this curiosity
                has driven my learning journey for the past seven years.
                <br />

                I pursued a master's degree in Corporate Finance and founded
                a scientific club to help students discover technology and the
                professional field. There, I learned graphic design and made it my profession.
                After designing several websites, I began implementing them and created
                my first application. I've since developed multiple websites and dashboards,
                and I'm excited about what's next.
              </Typography>
            </Box>
          </Grid>

         

        </Grid>
      </Box>

      <Box sx={{ p: 4 }}>
        <PageTitle PageTitle={"skills"} symbol={"#"} subTitle={""} />
        <Container >
          {isLoading ? <Loader /> : (<Grid container spacing={1}>

            {skills.map((skill, index) => {
              return (
                <Grid item key={index} xs={12} md={6} lg={4} >
                  <SkillCard skill={skill} />
                </Grid>

              )
            })}

          </Grid>)}


        </Container>

      </Box>

      <Box sx={{ p: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <PageTitle PageTitle={"work-experiance"} symbol={"#"} subTitle={""} />
            <VerticalLinearStepper />
          </Grid>
          <Grid item xs={12} md={6}>
            <PageTitle PageTitle={"education"} symbol={"#"} subTitle={""} />
            <EducationStepper />
          </Grid>

        </Grid>

      </Box>






    </Container>
  )
}

export default About