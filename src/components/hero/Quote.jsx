import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Widget = styled('div')(({ theme }) => ({
  padding: 10,
  borderRadius: 16,
  width: "90%",
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(40px)',
}));





export default function Test() {
  
  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Widget>
        <Typography color="primary.light"><span style={{fontSize:"30px", fontWeight:"bold"}}>“</span>Everyone should learn to program a computer, because it teaches you how to think<span style={{fontSize:"40px", fontWeight:"bold"}}>„ </span> -Steve Jobs</Typography>
        
       
       
      
         
      </Widget>
    </Box>
  );
}