import { motion } from 'framer-motion';
import { FaArrowUpLong } from 'react-icons/fa6';

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed='-.3'
      className='w-full min-h-screen bg-zinc-900 pt-1'
    >
      <div className='textstructure mt-52 px-20'>
        {['We Create', 'Eye Opening', 'Presentations'].map((item, index) => {
          return (
            <div key={index} className='masker overflow-hidden'>
              <div className='w-fit flex items-end'>
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '9vw' }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className='mr-5 rounded-md  w-[10vw] h-[8vw] xl:h-[6.5vw] relative -top-1 bg-red-400'
                  ></motion.div>
                )}
                <h1 className='uppercase leading-[10vw] xl:leading-[8vw] founders-grotex text-[12.5vw] xl:text-[10vw]'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className='border-t-2 border-zinc-800 mt-28 flex justify-between items-center py-5 px-20'>
        {[
          'For public and private companies',
          'From the first pitch to IPO',
        ].map((item, index) => (
          <p className='text-md font-light tracking-tight leading-none'>
            {item}
          </p>
        ))}
        <div className='start flex items-center gap-5'>
          <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-md uppercase rounded-full'>
            start the project
          </div>
          <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
            <span className='rotate-[45deg]'>
              {' '}
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
