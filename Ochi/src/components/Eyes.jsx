import React, { useState, useEffect } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX);
      let angleDeg = (angle * 180) / Math.PI;
      setRotate(angleDeg-180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-section data-scroll-speed="-.5" className='relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center'>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          {/* Left Eye */}
          <div className="w-[13vw] h-[13vw] bg-zinc-100 rounded-full flex justify-center items-center">
            <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
              <div
                className="absolute top-1/2 left-1/2 line w-full h-7"
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              >
                <div className="w-7 h-7 bg-zinc-100 rounded-full flex justify-center items-center"></div>
              </div>
            </div>
          </div>
          {/* Right Eye */}
          <div className="w-[13vw] h-[13vw] bg-zinc-100 rounded-full flex justify-center items-center">
            <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
              <div
                className="absolute top-1/2 left-1/2 line w-full h-7"
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              >
                <div className="w-7 h-7 bg-zinc-100 rounded-full flex justify-center items-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
