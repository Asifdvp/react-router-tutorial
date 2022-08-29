import React, { useEffect, useState } from "react";
// import axios from "axios";
import axios from "axios";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/Contact";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";

export default function App() {
  return (
    <div className="App">
      <h1>React Router React Dersleri</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path ="/blog" element={<Blog/>}>
          <Route path="categories" element={<Categories/>}/>
          <Route path="post/:url" element={<Post/>}/>
          </Route>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}
