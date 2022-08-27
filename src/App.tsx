import React, { useEffect, useState } from "react";
// import axios from "axios";
import axios from "axios";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Asif from "./Asif";
import Country from "./Country";
export default function App() {
  return (
    <div className="App">
      <h1>React Router React Dersleri</h1>
      <BrowserRouter>
        <Routes>
          <Route   path="/" element={<Asif />} />
          <Route path="/country/:code" element={<Country />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
