import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="index.html" element={<Home />} />
        <Route path="services.html" element={<Services />} />
        <Route path="contact.html" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;