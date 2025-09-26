import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import Video from "./Video";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-100 pt-1"
    >
      {/* Main Heading */}
      <div className="textStructure mt-48 px-20">
        {[
          "Smart Farming",
          "for a Greener Future:",
          "Precision Pesticide Spraying",
          "",
        ].map((item, index) => {
          return (
            <div key={index} className="masker overflow-hidden">
              <div className="w-fit flex">
                {/* Video box only for index=1 */}
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw", height: "4.5vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="relative w-[7vw] h-[4.4vw] top-[1vw] rounded-md mr-[6px] overflow-hidden cursor-pointer"
                    onClick={() => setIsOpen(true)}
                  >
                    <Video />
                  </motion.div>
                )}

                <h1 className="uppercase text-[5.5vw] font-[Founders Grotesk] leading-[5.7vw] tracking-tight font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="border-t-[1px] border-zinc-600 mt-32 flex justify-between items-center px-20 pt-6">
        {[
          "For public and private companies",
          "For innovation teams and global brands",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none font-[Founders Grotesk]"
          >
            {item}
          </p>
        ))}

        {/* Buttons */}
        <div className="start flex items-center gap-5 group">
          {/* Text Button */}
          <div className="px-4 py-2 border-[2px] border-zinc-600 rounded-full font-light uppercase 
                          transition-all duration-300 hover:bg-zinc-800 hover:text-white cursor-pointer">
            Start the journey
          </div>

          {/* Arrow Button */}
          <div
            className="w-10 h-10 rounded-full border-[2px] border-zinc-600 flex items-center justify-center 
                       transition-all duration-300 group-hover:bg-zinc-800 cursor-pointer"
          >
            <span
              className="rotate-45 transition-transform duration-300 group-hover:rotate-90 group-hover:scale-125 group-hover:text-white"
            >
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>

      {/* 🔥 Modal Video */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center mt-20"
        >
          <div className="relative w-[95vw] h-[85vh] bg-black rounded-xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-3xl font-bold z-10"
            >
              ✕
            </button>

            {/* Video Player */}
            <video autoPlay controls className="w-full h-full object-cover">
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LandingPage;
