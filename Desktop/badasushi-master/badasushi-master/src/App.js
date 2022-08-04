import './App.css';


import React, { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Commerce from '@chec/commerce.js';

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"
import Register from "./pages/Login/Register"
import Reset from "./pages/Login/Reset"

import Dashboard from "./pages/Login/Dashboard"

import Blank from "./pages/Blank/Blank";

import Navbar from "./pages/NavBar/Navbar";
import {RemoveScrollBar} from 'react-remove-scroll-bar';

import Products from "./pages/Menu/Products";
import MProducts from "./pages/Menu/MProducts";

import Carter from "./pages/Menu/Carter";
import Check from "./pages/Menu/Check";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact"
function App() {

  return (
    <div>

  <BrowserRouter>
    <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="menu" element={<Products style={{overflowX: 'hidden'}}/>} />
            <Route path="cart" element={<Carter />} />
            <Route path="checkout" element={<Check />} />
            <Route path="about" element={<About />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="reset" element={<Reset />} />
            <Route path="vis-menu" element={<MProducts />} />
            <Route path="*" element={<Blank />} />
            
          
        </Routes>
  </BrowserRouter>
</div>
  );
}

export default App;
