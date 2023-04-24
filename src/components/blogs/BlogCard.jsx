
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

function BlogCard({ blog }) {

  //     backgroundImage: `url("./Rectangle 22.jpg")`,

  const styles = {
    backgroundImage: `url("http://localhost:3010/uploads/${blog?.imen}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '150px',
    width: '100%',
    '@media (max-width: 600px)': {
      height: '200px',
      width: '100%',
    },
  };

  return (
    <div>
      <Box sx={{ border: "1px solid gray", margin: 2, color: "gray" }}>
        <Box sx={styles}>

        </Box>

        <Typography sx={{ p: 1 }}>
          {blog?.technologies?.split(",").map((technology, index) =>{
            return(
              
                <span key={index}>{technology} </span>
              
            )
          })}
        </Typography>

        <Box sx={{ borderTop: '1px solid gray', width: '100%' }} />
        <Typography sx={{ px: 2, fontWeight: 500, fontSize: "25px", color: "white" }}>{blog?.title}</Typography>
        <Typography sx={{ px: 2 }}>{blog?.description.slice(0, 50) + "..."}</Typography>

        <Link to={`/blogs/${blog?._id}`}>
          <Button component="a"
            target="_blank" sx={{ color: "#ffffff", m: 2 }}  >See More !!</Button>

        </Link>







      </Box>
    </div>
  )
}

export default BlogCard




