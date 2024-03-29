import React from 'react'
import { Container, Typography } from '@mui/material';
import { Link } from '@mui/material';


const NotFound = () => {

  return (
    <Container maxWidth="md">
      <Typography p={2} color="primary.contrastText" variant="h3" align="center" gutterBottom>
        Oops, page not found!
      </Typography>
      <Typography color='primary' sx={{ fontSize: "150px", fontWeight: "900" }} align="center" gutterBottom>
        404
      </Typography>

      <Typography color="primary.contrastText" variant="body1" align="center" gutterBottom>
        The page you're looking for doesn't exist. Please check the URL or go back to the  <Link  component="a"
        href="/"
        sx={{
          color: '#FFDF39',
          textDecoration: 'none',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-2px',
            left: 0,
            width: '0%',
            height: '2px',
            backgroundColor: '#FFDF39',
            transition: 'width 0.3s ease',
          },
          '&:hover::after': {
            width: '100%',
          },
        }}>
          homepage
        </Link>
      </Typography>
      {/* <ContactForm /> */}
    </Container>)
}

export default NotFound