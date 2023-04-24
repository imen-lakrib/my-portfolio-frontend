import { Container, Grid } from '@mui/material'
import React, { useContext } from 'react'
import PageTitle from '../../components/customeComponents/PagesTitle'
import BlogCard from '../../components/blogs/BlogCard'
import { BlogsContext } from '../../contexts/BlogsContext'
import Loader from '../../components/Loader'

function Blog() {
  const {blogs,isLoading } = useContext(BlogsContext)
  // const isLoading= useContext(BlogsContext)

  return (



    <Container>
      <PageTitle PageTitle={"Blog"} symbol={"/"} subTitle={"what I'm thinking about ?"} />
      {isLoading? <Loader/>:(<Grid container spacing={4}>
        {blogs.map((blog, index)=>{
          return(
            <Grid key={index} item xs={12} md={4}>
          <BlogCard blog={blog} />

        </Grid>
          )
        })}


      </Grid>)}
      
    </Container>
  )
}

export default Blog