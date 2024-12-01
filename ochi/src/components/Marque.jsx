import { motion } from 'framer-motion';

const Marque = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed='.1'
      className='w-full rounded-tl-3xl rounded-tr-3xl -mt-8 lg:mt-0 py-10 lg:py-20 bg-[#004D43]'
    >
      <div className='text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap'>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 10 }}
          className='text-[20vw] leading-none founders-grotex uppercase -mt-2 pr-10 lg:pr-20'
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 10 }}
          className='text-[20vw] leading-none founders-grotex uppercase -mt-2 pr-10 lg:pr-20'
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 10 }}
          className='text-[20vw] leading-none founders-grotex uppercase -mt-2 pr-10 lg:pr-20'
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marque;
