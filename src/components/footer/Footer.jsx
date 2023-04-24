import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import React, { useContext } from 'react'

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ContactsContext } from '../../contexts/ContactsContext';
import Loader from '../Loader';

function Footer() {
    const { contacts, isLoading } = useContext(ContactsContext);

    return (
        <div>
            <Box sx={{ position: "absolute", borderTop: '1px solid gray', width: '100%', left: 0, margin: '20px 0' }} />


            <Container sx={{ pt: 10 }}>
                {isLoading ? <Loader /> : (<Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Box display="flex" justifyContent="flex-start" alignItems="center" color="primary.light" >
                            <img src='/Logo.png' alt='logo' />
                            <Typography sx={{ fontWeight: "600", px: 1 }}> {contacts[0]?.fullName}</Typography>

                        </Box>
                        <Typography color="primary.light" sx={{ fontWeight: "400" }}>{contacts[0]?.job}</Typography>


                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography color="primary.light" sx={{ fontWeight: "600", fontSize: "25px" }}>Media</Typography>
                        <Box display="flex" justifyContent="flex-start" alignItems="center" color="primary.contrastText" >

                            <IconButton component="a" href={`https://www.github.com/${contacts[0]?.github}`} target="_blank" >
                                <GitHubIcon />
                            </IconButton>
                            <IconButton component="a" href={`https://www.twitter.com/${contacts[0]?.twitter}`} target="_blank" >
                                <TwitterIcon />
                            </IconButton>

                            <IconButton component="a" href={`https://www.linkedin.com/in/${contacts[0]?.linkedin}`} target="_blank" >
                                <LinkedInIcon />
                            </IconButton>

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12} textAlign="center">
                        <Typography py={2} color="primary.contrastText">© Copyright 2023. Made by Imen Lakrib</Typography>
                    </Grid>

                </Grid>)}


            </Container>
        </div>
    )
}

export default Footer