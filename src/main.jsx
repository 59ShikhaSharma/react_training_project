import React from 'react'
import ReactDOM from 'react-dom/client'
 import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About/About.jsx';
import ContactUs from './components/ContactUS/ContactUs.jsx';
import Home from './components/Home/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route index element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactUs />} />


    </Routes>

  </BrowserRouter>


)
