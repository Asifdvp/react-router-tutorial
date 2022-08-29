import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Blog from './pages/Blog'
import Layout from './pages/Layout'
import Post from './pages/Post'

const App = () => {
  return (
    <div>
      <Routes>
<Route path='/*' element={<Layout/>}>
{/* <Route path='' element={<Layout/>}/> */}
<Route path='blog' element={<Blog/>}/>
<Route path='blog/:url' element={<Post/>}/>
<Route path='about' element={<About/>}/>
</Route>



      </Routes>


    </div>
  )
}

export default App