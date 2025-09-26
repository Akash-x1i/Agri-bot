import { motion, useAnimation } from "framer-motion";
import React from "react";

const Feature = () => {
  const card = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handleHover = (index) => {
    card[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    card[index].start({ y: "100%" });
  };

  const cardsData = [
    {
      title: "AI-Powered-Detection",
      img: "https://i.ibb.co/93vdx2rh/Gemini-Generated-Image-o19zo2o19zo2o19z.png",
      align: "left",
      description: "Detects pest, fungal, and bacterial infections in plants using AI technology."
    },
    {
      title: "Smart-Environmental-Monitoring",
      img: "https://i.ibb.co/zVsrCKfJ/Smart-Environmental-Monitoring.png",
      align: "right",
      description: "Monitors soil, temperature, and humidity for optimal crop growth."
    },
    {
      title: "IoT-Controlled-Spray",
      img: "https://i.ibb.co/67MzgkqK/Io-T-Controlled-Spraying.png",
      align: "left",
      description: "Dispenses pesticides precisely based on infection severity to reduce chemical use."
    },
    {
      title: "Autonomous-Rover-Navigation",
      img: "https://i.ibb.co/W40TsLYF/Autonomous-Rover-Navigation.png",
      align: "right",
      description: "Navigates crop rows autonomously with Lidar and stability control."
    },
    {
      title: "Data & Dashboard (Analytics)",
      img: "https://i.ibb.co/XZkW0tpV/Data-Dashboard-Analytics.png",
      align: "left",
      description: "Provides real-time data, alerts, and visual analytics for farmers."
    },
    {
      title: "Robotic-Arm-for-Treatment",
      img: "https://i.ibb.co/1kRFFMP/Robotic-Arm-for-Treatment.png",
      align: "right",
      description: "Performs targeted treatment: spray, laser sterilization, or cut infected parts."
    },
  ];

  return (
    <div className="w-full py-13">
     <h1 className=" ml-15 text-6xl font-[Neue Montreal] tracking-tight">Project's Features</h1>
      <div className="px-20">
        {[0, 2, 4].map((rowIndex) => (
          <div key={rowIndex} className="cards w-full flex gap-15 mt-10">
            {[0, 1].map((col) => {
              const index = rowIndex + col;
              const { title, img, align, description } = cardsData[index];
              return (
                <div key={index} className="w-1/2">
                  <motion.div
                    onHoverStart={() => handleHover(index)}
                    onHoverEnd={() => handleHoverEnd(index)}
                    className="relative cardcontainer rounded-xl h-[75vh]"
                  >
                    <div className="card w-full h-full rounded-xl overflow-hidden">
                      <h1
                        className={`absolute flex overflow-hidden ${
                          align === "left"
                            ? "left-full -translate-x-1/2"
                            : "right-full translate-x-1/2"
                        } top-1/2 -translate-y-1/2 z-[9] font-[Founders Grotesk] text-7xl font-semibold leading-none tracking-tight text-[#CDEA68]`}
                      >
                        {title.split("").map((char, i) => (
                          <motion.span
                            key={i}
                            initial={{ y: "100%" }}
                            animate={card[index]}
                            transition={{ ease: [0.65, 0, 0.35, 1], delay: i * 0.01 }}
                            className="inline-block"
                          >
                            {char}
                          </motion.span>
                        ))}
                      </h1>
                      <img className="w-full h-full object-cover" src={img} alt={title} />
                    </div>
                  </motion.div>
                  <p className="mt-3 text-center text-lg text-gray-700">{description}</p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;