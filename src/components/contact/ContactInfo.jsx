import { Box, Typography } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function ContactInfo({ contacts }) {
    return (
        <div>
            <Box sx={{ border: "1px solid gray", color: "primary.contrastText", p: 3 }}>


                <Typography sx={{ py: 1, fontWeight: 600, fontSize: "20px", color: "white" }}>Message me here</Typography>

                <Box sx={{ py: .5, display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                    <EmailIcon />
                    <Typography> lakribimen@gmail.com</Typography>

                </Box>
                <Box sx={{ py: .5, display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                    <LinkedInIcon />
                    {/* <Typography> {contacts[0].fullName}</Typography> */}
                    

                    {/* {console.log(contacts[0].fullName)} */}

                </Box>




            </Box>
        </div>
    )
}

export default ContactInfo


