import React, { useState } from 'react'
import { ArrowUpRight } from "lucide-react"; // arrow icon
import "locomotive-scroll/dist/locomotive-scroll.css";

const About = () => {
  const [showDetails, setShowDetails] = useState(false); // state to toggle details

  return (
    <div className='-mt-6 w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl p-16 font-semibold'>
      {/* Main Heading */}
      <h1 className='text-black font-[Neue Montreal] text-4xl lg:text-6xl leading-[1.2em] tracking-tighter mb-16'>
        Intelligent Pesticide Sprinkling System: Automated plant infection detection and targeted treatment to reduce pesticide use, improve crop yield, and promote sustainable agriculture.
      </h1>

      {/* Bottom Section */}
      <div className='w-full border-t-[2px] border-[#545252] pt-16 flex flex-col lg:flex-row gap-10'>
        
        {/* Left Side */}
        <div className='w-full lg:w-1/2 text-black'>
          <h2 className='text-7xl lg:text-5xl mb-8 font-semibold'>Our Approach</h2>
          
          <p className='text-[3vh] mb-4 font-bold'>
            Our system uses AI-powered cameras, sensors, and IoT-controlled sprayers to detect plant infections and precisely spray pesticides only where needed. This reduces environmental impact, lowers farming costs, and ensures healthier crops for sustainable agriculture.
          </p>

          {/* Show UL only if showDetails = true */}
          {showDetails && (
            <ul className='list-disc list-inside text-[2.5vh] mt-10 mb-6 font-bold transition-all duration-500'>
              <li>AI-based detection of pest, fungal, and bacterial infections in individual plants.</li>
              <li>IoT-controlled sprayer dispenses pesticides based on infection severity.</li>
              <li>Autonomous rover navigates crop rows using Lidar sensors and stability control.</li>
              <li>Robotic arm performs targeted treatment: spray, laser sterilization, or cutting infected parts.</li>
              <li>Real-time data collection for soil health, plant condition, and environmental parameters.</li>
              <li>Mobile/web interface provides farmers with alerts, heatmaps, and treatment summaries.</li>
            </ul>
          )}

          {/* Read More Button */}
          <button 
            onClick={() => setShowDetails(!showDetails)} 
            className='group mt-10 -ml-5 px-8 py-5 bg-zinc-900 rounded-full text-white flex gap-6 items-center'
          >
            <span>{showDetails ? "Read Less" : "Read More"}</span>

            {/* Circle with arrow */}
            <div className='relative w-2 h-2 bg-zinc-100 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out group-hover:w-6 group-hover:h-6'>
              <ArrowUpRight 
                className="text-black opacity-0 group-hover:opacity-100 transform group-hover:rotate-15 transition-all duration-300 ease-in-out" 
                size={18} 
              />
            </div>
          </button>
        </div>

        {/* Right Side Image */}
        <div className='w-full lg:w-1/2 rounded-3xl overflow-hidden'>
          <img 
            src='https://airoboo.in/wp-content/uploads/2024/01/1_cc78c93b-dfe0-4f1e-85a9-24bbb8205c7d_jpg_1066x.webp' 
            alt='Intelligent Pesticide Sprinkling System' 
            className='w-full h-auto object-cover rounded-3xl'
          />
        </div>

      </div>
    </div>
  )
}

export default About
