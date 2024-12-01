import React from 'react';

const Cards = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed='-.2'
      className='flex flex-col lg:flex-row items-center px-20 gap-5 min-h-screen bg-zinc-100 w-full py-20'
    >
      <div className='cardcontainer min-h-[150px] h-[40vh] w-full lg:w-1/2'>
        <div className='card relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center'>
          <img
            src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'
            alt=''
            className='w-32'
          />
          <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2'>
            &copy; 2019-2022
          </button>
        </div>
      </div>
      <div className='cardcontainer flex gap-5 min-h-[150px] h-[40vh] lg:h-[50vh] w-full lg:w-1/2'>
        <div className='relative card w-1/2 h-full bg-[#03241f] rounded-xl flex items-center justify-center'>
          <img
            src='	https://ochi.design/wp-content/uploads/2022/04/logo002.svg'
            alt=''
            className='w-32'
          />
          <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 uppercase'>
            Rating 5.0 on Clutch
          </button>
        </div>
        <div className='relative card w-1/2 h-full bg-[#03241f] rounded-xl flex items-center justify-center'>
          <img
            src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'
            alt=''
            className='w-32'
          />
          <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 uppercase'>
            Business Bootcamp Alumni
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
