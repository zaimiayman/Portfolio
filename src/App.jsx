import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projet from "./components/Projet";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certif from "./components/certif";

const App = () => {
  return (
   <div>
      <Navbar />
      <Hero />
      <About/>
      <Services/>
      <Projet/>
      <Skills/>
      <Contact/>
      <Footer />
  </div>
  );
};

export default App;
