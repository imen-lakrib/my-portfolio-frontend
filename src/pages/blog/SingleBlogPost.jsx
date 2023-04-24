import { Box, Card, Container, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function SingleBlogPost() {
    const { id } = useParams(); // extract the id parameter from the URL

    // fetch the single Blog post using id extracted from teh id parameter

    const [blogPost, setBlogPost] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`http://localhost:3010/blog/${id}`);
        setBlogPost(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, [id]);







  return (
    <Container>
        <Box color="primary.light">

        <div style={{color:"#ffffff", display: "flex", justifyContent: "space-flex-start", alignItems: "center" }} >
                <Typography  sx={{ color: "secondary.main", fontSize: "30px" , fontWeight:"600"}}>#</Typography>
                <Typography sx={{fontWeight:500, fontSize:{xs:"15px", sm:"15px", md:'25px'}}}>{blogPost?.title}</Typography>
            </div>
            
            <img alt='blogimage' src={`http://localhost:3010/uploads/${blogPost?.imen}`}/>
            <Typography sx={{p:2}} color="primary.contrastText">{blogPost?.description}</Typography>
        </Box>
    </Container>
  )
}

export default SingleBlogPost