import React from 'react'
import { NavLink } from 'react-router-dom'

const Blog = () => {
  return (
    <div>Blog
      <ul><li>
        <NavLink to="/blog/1">Post1</NavLink>
      </li>
      <li>
        <NavLink to="/blog/2">Post2</NavLink>
      </li>
     <li>
        <NavLink to="/blog/3">Post3</NavLink>
      </li>
      </ul>
      
    </div>
  )
}

export default Blog