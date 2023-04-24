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
          color: 'primary',
          position: 'relative',
          '&:hover': {
            textDecoration: 'none',
            '&::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              bottom: -2,
              width: '100%',
              borderBottom: '2px solid',
              borderBottomColor: 'primary.main',
              transition: 'transform 0.3s ease',
              transform: 'scaleX(0)',
              transformOrigin: 'left',
            },
            '&:hover::after': {
              transform: 'scaleX(1)',
              transformOrigin: 'right',
            },
          },
        }}>
          homepage
        </Link>
      </Typography>
      {/* <ContactForm /> */}
    </Container>)
}

export default NotFound