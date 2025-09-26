import { motion } from 'framer-motion';
import React from 'react';

const Pmarque = ({ width = '600px', text = 'We are Ochi' }) => {
  return (
    <div className='w-full flex justify-center mt-6'>
      <div
        className='text-white rounded-tl-2xl rounded-tr-2xl overflow-hidden border-t-2 border-b-2 border-zinc-300'
        style={{
          width,
          background: 'linear-gradient(to right, #FF9933, #FFFFFF, #138808)', // Saffron → White → Green
        }}
      >
        <div className='flex whitespace-nowrap'>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 10 }}
            className='text-[5vw] font-bold uppercase pb-5 leading-none font-[Founders Grotesk] pr-10'
          >
            {text}
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 10 }}
            className='text-[5vw] font-bold uppercase pb-5 leading-none font-[Founders Grotesk]'
          >
            {text}
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Pmarque;
