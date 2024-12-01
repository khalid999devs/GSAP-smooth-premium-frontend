'use client';

import Image from 'next/image';
import Parallax from './Parallax';
import { useLenis } from '@studio-freight/react-lenis';

const ImageList = () => {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <>
      <button
        className='bg-white text-black capitalize p-4 font-semibold text-xl mt-16 mb-4'
        onClick={() => {
          lenis.scrollTo('#last-image', { lerp: 0.02 });
        }}
      >
        scroll to anchor
      </button>
      <Image
        src='https://picsum.photos/600/400?random=1'
        alt='Smooth scroll'
        width={600}
        height={400}
      />
      <Parallax speed={2} className={'self-end overflow-hidden'}>
        <Image
          src={'https://picsum.photos/600/400?random=2'}
          alt='Smooth scroll'
          width={600}
          height={400}
        />
      </Parallax>

      <Parallax speed={2} className={'self-center'}>
        <Image
          src={'https://picsum.photos/600/400?random=3'}
          alt='Smooth scroll'
          width={600}
          height={400}
        />
      </Parallax>

      <Parallax speed={-1} className={'self-start'}>
        <Image
          src={'https://picsum.photos/600/400?random=4'}
          alt='Smooth scroll'
          width={600}
          height={400}
        />
      </Parallax>

      <Parallax speed={2} className={'self-end'}>
        <Image
          src={'https://picsum.photos/600/400?random=5'}
          alt='Smooth scroll'
          width={600}
          height={400}
        />
      </Parallax>

      <Parallax speed={1} className={'self-start'}>
        <Image
          src={'https://picsum.photos/600/400?random=6'}
          alt='Smooth scroll'
          width={600}
          height={400}
        />
      </Parallax>

      <Parallax speed={-1} className={'self-center'}>
        <Image
          src={'https://picsum.photos/600/400?random=7'}
          alt='Smooth scroll'
          width={600}
          height={400}
        />
      </Parallax>

      <Parallax speed={1} className={'self-end'}>
        <Image
          src={'https://picsum.photos/600/400?random=8'}
          alt='Smooth scroll'
          width={600}
          height={400}
        />
      </Parallax>

      <Parallax speed={-1} className={'self-start'}>
        <Image
          src={'https://picsum.photos/600/400?random=9'}
          alt='Smooth scroll'
          width={600}
          height={400}
        />
      </Parallax>

      <Parallax speed={2} className={'self-end'}>
        <Image
          src={'https://picsum.photos/600/400?random=10'}
          alt='Smooth scroll'
          width={600}
          height={400}
          id='last-image'
        />
      </Parallax>
    </>
  );
};

export default ImageList;
