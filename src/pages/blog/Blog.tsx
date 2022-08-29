import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Blog = () => {
  return (
    <>
     <div>Blog</div>
<ul>
  <li><Link to='/categories'>Categories</Link></li>
  <li><Link to='/post'>Post</Link></li>
</ul>
    </>
   
  )
}

export default Blog