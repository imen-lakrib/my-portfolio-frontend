import { Box, Card, Container, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import { API_URL } from '../../../../../home/imen/Desktop/myPortfolio/imen-lakrib-portfolio/ApiConfig';
function SingleBlogPost() {
  const { id } = useParams(); // extract the id parameter from the URL

  // fetch the single Blog post using id extracted from teh id parameter

  const [blogPost, setBlogPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(app/+`blog/${id}`);
        setBlogPost(res.data);
        setIsLoading(false)
      } catch (error) {
        console.error(error);
        setIsLoading(false)
      }
    };

    fetchBlogs();
  }, [id]);




  


  return (
    <Container>
      <Box color="primary.light">

        {isLoading ? <Loader /> : (<>
          <div style={{ color: "#ffffff", display: "flex", justifyContent: "space-flex-start", alignItems: "center" }} >
            <Typography sx={{ color: "secondary.main", fontSize: "30px", fontWeight: "600" }}>#</Typography>
            <Typography sx={{ fontWeight: 500, fontSize: { xs: "15px", sm: "15px", md: '25px' } }}>{blogPost?.title}</Typography>
          </div>

          <Box sx={{width:{xs:"250px", sm:"300", md:"520px"}, height:{xs:"250px", sm:"300", md:"350px"}}}><img style={{width:"100%"}} alt='blogimage' src={app/+`uploads/${blogPost?.imen}`} /></Box>
          <Typography sx={{ p: 2 }} color="primary.contrastText">{blogPost?.description}</Typography>

        </>)}

      </Box>
    </Container>
  )
}

export default SingleBlogPost