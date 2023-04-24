import React from 'react'
import SectionTitle from '../customeComponents/SectionTitle'
import { Container, Grid } from '@mui/material'
import Brief from './Brief'
import ContactInfo from './ContactInfo'

function ContactSection() {
  return (
    <Container>
      <SectionTitle SectionTitle={"Contact Me"} link={"/contact"} />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={5}>
          <Brief />
        </Grid>
        <Grid item xs={0} sm={0} md={2}>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <ContactInfo />
        </Grid>

      </Grid>

    </Container>
  )
}

export default ContactSection