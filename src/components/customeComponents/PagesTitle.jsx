import { Container, Typography } from '@mui/material'
import React from 'react'
function PageTitle({ PageTitle, symbol, subTitle }) {
    return (

        <Container sx={{ margin: "0 10px" }}>
            <div style={{ color: "#ffffff", display: "flex", justifyContent: "space-flex-start", alignItems: "center" }} >
                <Typography sx={{ color: "secondary.main", fontSize: "30px", fontWeight: "600" }}>{symbol}</Typography>
                <Typography sx={{
                    fontWeight: 500, fontSize: { xs: "15px", sm: "15px", md: '25px' },
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
                }} >{PageTitle.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())}</Typography>
            </div>
            <Typography sx={{ color: "#ffffff", fontSize: "15px", fontWeight: "200" }}>{subTitle}</Typography>

        </Container>

    )
}

export default PageTitle