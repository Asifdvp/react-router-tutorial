import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
    
  return (
    <div>Layout
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/blog'}>Blog</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
    
      </ul>
      <Outlet/>
    </div>
  )
}

export default Layout