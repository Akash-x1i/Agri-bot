import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react"; // arrow icon
import "locomotive-scroll/dist/locomotive-scroll.css";

const PAbout = () => {
  const [showDetails, setShowDetails] = useState(false); // toggle state

  return (
    <div>
      <div className=" -mt-6 w-full bg-[#CDEA68] border-b-2 rounded-tl-3xl rounded-tr-3xl p-16 font-semibold">
        {/* Bottom Section */}
        <div className="w-full border-t-[2px] border-[#545252] pt-16 flex flex-col lg:flex-row gap-25">
          
          {/* Left Side Image */}
          <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden">
            <img
              src="https://i.ibb.co/20dHXH6N/Gemini-Generated-Image-te8iplte8iplte8i.png"
              alt="Intelligent Pesticide Sprinkling System"
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-1/2 text-black">
            <h2 className="text-7xl lg:text-6xl mb-8 font-semibold">
              Our Product
            </h2>

            <p className="text-[3vh] mb-4 font-bold">
              The Intelligent Pesticide Sprinkling System is an autonomous
              agricultural rover designed to revolutionize crop protection.
              Equipped with AI-powered cameras, advanced sensors, and a
              multi-functional robotic arm, it detects plant infections in
              real-time and delivers precise, targeted treatment.
            </p>

            {/* Show Details Only When Read More Clicked */}
            {showDetails && (
              <ul className="list-disc list-inside text-[2.5vh] mt-10 mb-6 font-bold transition-all duration-500">
                <li>
                  AI-based detection of pest, fungal, and bacterial infections in
                  individual plants.
                </li>
                <li>
                  IoT-controlled pesticide sprayer that dispenses chemicals only
                  where needed, reducing environmental impact and saving costs.
                </li>
                <li>
                  Autonomous navigation through crop rows with stability control
                  for uneven terrain.
                </li>
                <li>
                  Robotic arm capable of spraying, laser sterilization, or cutting
                  infected plant parts.
                </li>
                <li>
                  Soil and environmental monitoring with real-time data on soil
                  moisture, pH, and plant health.
                </li>
                <li>
                  Solar-powered energy system for sustainable long-term operation.
                </li>
                <li>
                  User-friendly mobile and web interface providing alerts,
                  heatmaps, and treatment summaries for farmers.
                </li>
                <li>
                  Ensures healthier crops, higher yields, and promotes sustainable
                  farming practices.
                </li>
              </ul>
            )}

            {/* Read More Button */}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="group mt-10 -ml-5 px-8 py-5 bg-zinc-900 rounded-full text-white flex gap-6 items-center"
            >
              <span>{showDetails ? "Read Less" : "Read More"}</span>

              {/* Circle with arrow */}
              <div className="relative w-2 h-2 bg-zinc-100 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out group-hover:w-6 group-hover:h-6">
                <ArrowUpRight
                  className="text-black opacity-0 group-hover:opacity-100 transform group-hover:rotate-15 transition-all duration-300 ease-in-out"
                  size={18}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PAbout;
