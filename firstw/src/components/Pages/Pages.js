

import React from "react";
import Header from "../common/Header/Header";
import Home from "../Home/Home";
import BLOG from "../BLOG/Blog";
import Contact from "../Contact/Contact";
import { Routes, Route } from "react-router-dom"; 



const Pages = () => {
  return (
    <div>
      <Header />
      
      {/* Use Routes without wrapping another Router */}
      <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/blog" element={<BLOG />} />
    <Route path ="contact" element={<Contact/>} />
</Routes>



      
    </div>
  );
};

export default Pages;
