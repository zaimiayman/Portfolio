import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projet from "./components/Projet";
import Skills from "./components/Skills";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <About/>
      <Services/>
      <Projet/>
      <Skills/>
      <Contact/>
      <Footer />
    </Router>
  );
};

export default App;
