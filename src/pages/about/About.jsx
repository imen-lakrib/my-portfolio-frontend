import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import PageTitle from '../../components/customeComponents/PagesTitle'
import SkillCard from '../../components/skills/SkillCard'
import VerticalLinearStepper from '../../components/stepper/VerticalLinearStepper'
import EducationStepper from '../../components/stepper/EducationStepper'
import { SkillsContext } from '../../contexts/SkillsContext'

function About() {

  const skills = useContext(SkillsContext);

  return (
    <Container>
      <Box sx={{ p: 4 }}>
        <PageTitle PageTitle={"about-me"} symbol={"/"} subTitle={"Who am i ?"} />
        <Grid container spacing={4} >
          <Grid item xs={12} md={8}>
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

          <Grid item xs={12} md={4}>
            <Box sx={{ width: "400px" }} >
              <img style={{ width: "100%" }} src="/chesss.png" alt='chess' />

            </Box>

          </Grid>

        </Grid>
      </Box>

      <Box sx={{ p: 4 }}>
        <PageTitle PageTitle={"skills"} symbol={"#"} subTitle={""} />
        <Container >
          <Grid container spacing={1}>

            {skills.map((skill, index) => {
              return (
                <Grid item key={index} xs={12} sm={6} md={3} >
                  <SkillCard skill={skill} />
                </Grid>

              )
            })}

          </Grid>

        </Container>

      </Box>

      <Box sx={{ p: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <PageTitle PageTitle={"work-experiance"} symbol={"#"} subTitle={""} />
            <VerticalLinearStepper  />
          </Grid>
          <Grid item xs={12} md={6}>
            <PageTitle PageTitle={"education"} symbol={"#"} subTitle={""} />
            <EducationStepper  />
          </Grid>

        </Grid>

      </Box>






    </Container>
  )
}

export default About