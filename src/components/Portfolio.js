import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import Work from './Work';
import Services from './Services';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import FloatingElements from './FloatingElements';
import CustomCursor from './CustomCursor';
import MapViewer from './MapViewer';

function Portfolio({ darkMode, toggleDarkMode }) {
  return (
    <>
      <CustomCursor />
      <FloatingElements />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Work />
      <Services />
      <About />
      {/* Campus Map section */}
      <MapViewer />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Portfolio;
