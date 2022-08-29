import React, { useEffect, useState } from "react";
// import axios from "axios";
import axios from "axios";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/Contact";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import BlogLayout from "./pages/blog/BlogLayout";
import Page404 from "./pages/Page404";
import Layihe from "./pages/Layihe";

export default function App() {
  return (
    <div className="App">
      <h1>React Router React Dersleri</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/contact'>Contact</Link>
        {/* <Navigate to="/layihe"> */}
      </nav>
      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path ="/blog" element={<BlogLayout/>}>
          <Route index={true} element={<Blog/>}/>
          <Route path="categories" element={<Categories/>}/>
          <Route path="post/:url/:id" element={<Post/>}/>
          </Route>
        <Route path="/contact" element={<Contact/>}/>
        <Route path ="*" element={<Page404/>}/>
       <Route path ="layihe" element={<Layihe/>}/>
      </Routes>
    </div>
  );
}
