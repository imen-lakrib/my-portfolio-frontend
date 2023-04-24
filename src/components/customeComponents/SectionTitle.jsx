import { Box, Button, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

import React from 'react'
import TagIcon from '@mui/icons-material/Tag';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function SectionTitle({ SectionTitle, link }) {
    return (

        // sx={{fontSize:{sx:"20px", md:'25px'}}}
        <Container sx={{ display: 'flex', justifyContent: "space-between", my: 10 }}>
            <div style={{ color: "#ffffff", display: "flex", justifyContent: "space-flex-start", alignItems: "center", margin: "0 10px" }} >
                <TagIcon sx={{ color: "secondary.main", fontSize: "20px" }} />
                <Typography sx={{
                    fontWeight: 500, fontSize: {xs:"13px", sm: "15px", md: '20px' },
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
                }} >{SectionTitle.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())}</Typography>
                <Box sx={{ borderTop: '1px solid #FFDF39', width: { xs: "0", sm: '40px', md: '300px' } }} />
            </div>
            <Button component={Link} to={link} sx={{ color: "white" }} variant="text" endIcon={<ArrowForwardIcon />}>
                <Typography sx={{ display: {xs:"none", sm: "none" , md:"block"} }}>View all</Typography>
            </Button>

        </Container>

    )
}

export default SectionTitle