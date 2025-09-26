import { motion } from 'framer-motion'
import React from 'react'
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
const Marque = () => {
  return (
    
    <div data-scroll data-scroll-section data-scroll-speed=".1" className=' text-white w-full py-10 bg-[#004D43] rounded-tl-2xl rounded-tr-2xl overflow-hidden'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden'>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ repeat:Infinity,ease:"linear", duration:10 }} className='text-[15vw] font-bold uppercase pb-5 leading-none font-[Founders Grotesk] pr-10'>We are Murphy's Law</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ repeat:Infinity,ease:"linear", duration:10 }} className='text-[15vw] font-bold uppercase pb-5 leading-none font-[Founders Grotesk]'>We are Murphy's Law</motion.h1>
      
      </div>
    </div>
  )
}

export default Marque