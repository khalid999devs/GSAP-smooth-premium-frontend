import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed='-.0.5'
      className='w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'
    >
      <div className='p-20 pr-24 lg:pr-40'>
        <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h1>
      </div>

      <div className='w-full flex gap-5 border-t-[2px] border-[#a1b562] mt-20 px-20 pb-20 pt-10'>
        <div className='w-1/2'>
          <h1 className='text-5xl lg:text-7xl'>Our approach:</h1>
          <button className='flex gap-8 items-center px-8 py-4 mt-10 bg-zinc-900 rounded-full text-white uppercase'>
            Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className='w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]'></div>
      </div>
    </div>
  );
};

export default About;
