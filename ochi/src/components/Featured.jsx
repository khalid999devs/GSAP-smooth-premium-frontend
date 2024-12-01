import { motion } from 'framer-motion';
import { Power4 } from 'gsap';
import React, { useState } from 'react';

const Featured = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isSecondHovering, setIsSecondHovering] = useState(false);

  return (
    <div data-scroll data-scroll-section className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className='px-20'>
        <div className='cards w-full flex gap-4 lg:gap-10 mt-10'>
          <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className='cardcontainer relative w-1/2 min-h-[150px]'
          >
            <h1 className='absolute flex z-[9] founders-grotex text-8xl leading-none -translate-x-1/2 -translate-y-1/2 top-1/2 overflow-hidden left-full text-[#CDEA68]'>
              {'FYDE'.split('').map((item, index) => (
                <motion.span
                  initial={{ y: '100%' }}
                  animate={isHovering ? { y: '0' } : { y: '100%' }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  className='inline-block translate-y-full'
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='w-full h-full rounded-xl overflow-hidden'>
              <img
                className='w-full h-full bg-cover'
                src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png'
                alt=''
              />
            </div>
          </div>
          <div
            onMouseEnter={() => setIsSecondHovering(true)}
            onMouseLeave={() => setIsSecondHovering(false)}
            className='relative cardcontainer w-1/2 min-h-[150px]'
          >
            <h1 className='absolute flex z-[9] founders-grotex text-8xl leading-none translate-x-1/2 -translate-y-1/2 top-1/2 right-full overflow-hidden text-[#CDEA68]'>
              {'VISE'.split('').map((item, index) => (
                <motion.span
                  initial={{ y: '100%' }}
                  animate={isSecondHovering ? { y: '0' } : { y: '100%' }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  className='inline-block translate-y-full'
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='w-full h-full rounded-xl overflow-hidden '>
              <img
                className='w-full h-full bg-cover'
                src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
