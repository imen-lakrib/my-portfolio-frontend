import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <div>
            <Box sx={{ position: "absolute", borderTop: '1px solid gray', width: '100%', left: 0, margin: '20px 0' }} />


            <Container sx={{ pt: 10 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Box display="flex" justifyContent="flex-start" alignItems="center" color="primary.light" >
                            <img src='/Logo.png' alt='logo' />
                            <Typography sx={{ fontWeight: "600", px: 1 }}> Imen Lakrib</Typography>

                        </Box>
                        <Typography color="primary.light" sx={{ fontWeight: "400" }}>Web designer and front-end developer</Typography>


                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography color="primary.light" sx={{ fontWeight: "600", fontSize: "25px" }}>Media</Typography>
                        <Box display="flex" justifyContent="flex-start" alignItems="center" color="primary.contrastText" >

                            <IconButton component="a" href="https://github.com/imen-lakrib" target="_blank" >
                                <GitHubIcon />
                            </IconButton>
                            <IconButton component="a" href="https://twitter.com/imen_lakrib" target="_blank" >
                                <TwitterIcon />
                            </IconButton>

                            <IconButton component="a" href="https://www.linkedin.com/in/imenlakrib/" target="_blank" >
                                <LinkedInIcon />
                            </IconButton>

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12} textAlign="center">
                        <Typography py={2} color="primary.contrastText">© Copyright 2023. Made by Imen Lakrib</Typography>
                    </Grid>

                </Grid>

            </Container>
        </div>
    )
}

export default Footer