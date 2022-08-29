import React from 'react'
import { Outlet } from 'react-router-dom'

const Blog = () => {
  return (
    <>
     <div>Blog</div>
    <Outlet/>
    </>
   
  )
}

export default Blog