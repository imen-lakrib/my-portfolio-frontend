import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ContactsContext } from '../../contexts/ContactsContext';
function ContactInfo() {

    const contacts = useContext(ContactsContext);

    return (
        <div>
            <Box sx={{ border: "1px solid gray", color: "primary.contrastText", p: 3 }}>


                <Typography sx={{ py: 1, fontWeight: 600, fontSize: "20px", color: "white" }}>Message me here</Typography>

                <Box  component="a"  target="_blank" href={`mailto:${contacts[0]?.email}`} sx={{cursor:"pointer", py: .5, display: "flex", justifyContent: "flex-start", alignItems: "center", textDecoration:'none', color:"gray" }}>
                    <EmailIcon />
                    <Typography> {contacts[0]?.email}</Typography>

                </Box>
                <Box  component="a"  target="_blank" href={`https://www.linkedin.com/in/${contacts[0]?.linkedin}`} sx={{ cursor:"pointer", py: .5, display: "flex", justifyContent: "flex-start", alignItems: "center" , textDecoration:'none', color:"gray"}}>
                    <LinkedInIcon />
                    <Typography> {contacts[0]?.linkedin}</Typography>
                    


                </Box>




            </Box>
        </div>
    )
}

export default ContactInfo


