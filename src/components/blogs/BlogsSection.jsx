import React, { useContext } from 'react'
import SectionTitle from '../customeComponents/SectionTitle'
import { Container, Grid } from '@mui/material'
import { BlogsContext } from '../../contexts/BlogsContext';
import BlogCard from './BlogCard';

function BlogsSection() {
  const blogs = useContext(BlogsContext);

  return (
    <Container>
      <SectionTitle SectionTitle={"Latest Blogs"} link={"/blogs"} />
      <Grid container spacing={4}>
        {blogs.map((blog, index) => (
          <Grid  item xs={12} md={4} key={index}>
            <BlogCard blog={blog} />
          </Grid>
        ))}
      </Grid>


    </Container>
  )
}

export default BlogsSection