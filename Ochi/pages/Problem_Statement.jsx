import React from 'react';
import LiquidEther from '../src/components/Problem_Statement/LiquidEther';
import Navbar from '../src/components/Navbar';
import Pmarque from '../src/components/Problem_Statement/Pmarque';
import Projects from '../src/components/Projects';
import PAbout from '../src/components/Problem_Statement/PAbout';4
import Footer from '../src/components/Footer';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import LocomotiveScroll from 'locomotive-scroll';
import ModelViewer from '../src/components/Problem_Statement/ModelViewer';
import CardforModel from '../src/components/Problem_Statement/CardforModel';

const ProblemStatement = () => {
    const locomotiveScroll = new LocomotiveScroll();
  
  return (

    <div className="relative w-full h-screen">
  

      {/* Background with LiquidEther and Marquee */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <LiquidEther
          colors={['#CDEA68', '#AEEB55', '#D4F17D']}
          mouseForce={20}
          cursorSize={100}
          // isViscous={false}
          // viscous={30}
          // iterationsViscous={32}
          // iterationsPoisson={32}
          // resolution={0.5}
          // isBounce={false}
          // autoDemo={true}
          // autoSpeed={0.5}
          // autoIntensity={2.2}
          // takeoverDuration={0.25}
          // autoResumeDelay={3000}
          // autoRampDuration={0.6}
        />

        {/* Marquee behind content */}
        <div className="absolute mt-50 top-1/2 left-0 w-full opacity-60 pointer-events-none">
          <Pmarque width="100%" text="SIH 2025 SIH 2025 SIH 2025 SIH 2025 SIH 2025" />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-25 py-25">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Intelligent Pesticide Sprinkling System (P.S-25015)
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Excessive and indiscriminate pesticide use harms soil, water, beneficial insects, and human health. This system detects plant infection levels and sprays pesticides precisely, reducing waste and supporting sustainable farming.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-10">
          <img
            src="https://i.ibb.co/hJPt2p08/Gemini-Generated-Image-pxwwylpxwwylpxww.png"
            alt="Pesticide Sprinkling System"
            className="w-full h-[37vw] rounded-lg shadow-lg"
          />
        </div>
      </div>
       <PAbout></PAbout>
        <Projects></Projects>
      <CardforModel></CardforModel>
       <Footer></Footer>
    </div>
  );
};

export default ProblemStatement;
