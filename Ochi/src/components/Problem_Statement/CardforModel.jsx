import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ModelViewer from "./ModelViewer"; // make sure the path is correct
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const CardforModel = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <div data-scroll data-scroll-section data-scroll-speed="-.05" className=" -mt-6 w-full bg-[#dfe2d7]  rounded-tl-3xl rounded-tr-3xl p-16 font-semibold">
        {/* Bottom Section */}
        <div className="w-full border-t-[2px] border-[#545252] pt-16 flex flex-col lg:flex-row gap-25">
          {/* Left Side 3D Model */}
          <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden">
            <div className="w-full h-[400px] lg:h-[500px] rounded-3xl">
              <ModelViewer />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-1/2 text-black">
            <h2 className="text-7xl lg:text-6xl mb-8 font-semibold">
              3D Model
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
              <ul className="list-disc list-inside text-[2.5vh] mt-5 mb-6 font-bold transition-all duration-500">
                <li>
                  AI-based detection of pest, fungal, and bacterial infections in
                  individual plants.
                </li>
                <li>
                  IoT-controlled pesticide sprayer that dispenses chemicals only
                  where needed, reducing environmental impact and saving costs.
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

export default CardforModel;
