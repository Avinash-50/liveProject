import React from "react";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import Home from "../Home/Home";
import { Routes, Route } from "react-router-dom";

const Pages = () => {
  return (
    <div className="App">
      <Header />
      <switch>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </switch>
      <Footer />
    </div>
  );
};

export default Pages;
