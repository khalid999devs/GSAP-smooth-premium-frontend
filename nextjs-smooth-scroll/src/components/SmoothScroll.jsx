'use client';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, //speed of the scroll
        duration: 1.5,
        syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
