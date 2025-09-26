// App.jsx
import React, { useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marque from './components/Marque';
import About from './components/About';
import Eyes from './components/Eyes';
import Feature from './components/Feature';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Problem_Statement from '../pages/Problem_Statement';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import AboutUs from '../pages/AboutUs';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1, // scroll speed
      });

      return () => locomotiveScroll.destroy();
    }
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <Marque />
              <About />
              <Eyes />
              <Feature />
              <Cards />
            </>
          }
        />
        <Route
          path="/Problem_Statement"
          element={<Problem_Statement />}
        />
        <Route
          path="about-us"
          element={<AboutUs></AboutUs>}
        />
        <Route
          path="Home"
          element={<App></App>}
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
