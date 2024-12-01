const sliderContent = [
  'LuminaPad',
  'PulseEar',
  'ZenitWatch',
  'AeroCharge',
  'NimbusCam',
  'EclipseDrive',
  'TerraHub',
  'QuantumKey',
  'MeshRouter',
  'AuraBearm',
];

const imageContent = [
  'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1620794511798-d7ba5299a087?q=80&w=398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1512906261250-eaaa1dce91a5?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1515703817793-511cee221bb9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1600497900863-2dfbeedb06a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1616709324104-05258a9181af?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1675044794023-2c70962f4899?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1510511233900-1982d92bd835?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

let currentImageIndex = 2;
let currentContentIndex = 1;
const totalImages = 10;
let isAnimating = false;

function splitTextIntoSpans(selector) {
  let elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    let text = element.innerText;
    let splitText = text
      .split('')
      .map((char) => {
        return `<span>${char === ' ' ? '&nbsp;&nbsp;' : char}</span>`;
      })
      .join('');
    element.innerHTML = splitText;
  });
}

gsap.to('.slide-next-img', {
  clipPath: 'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
  duration: 1.5,
  ease: 'power3.out',
  delay: 1,
});

setInterval(() => {
  if (isAnimating) return;

  isAnimating = true;
  splitTextIntoSpans('.slider-content-active h1');

  gsap.to('.slide-active img', {
    scale: 2,
    duration: 2,
    ease: 'power3.out',
  });

  gsap.to('.slider-content-active h1 span', {
    top: '-175px',
    stagger: 0.05,
    ease: 'power3.out',
    duration: 0.5,
    onComplete: () => {
      gsap.to('.slider-content-active', {
        top: '-175px',
        duration: 0.25,
        ease: 'power3.out',
      });
    },
  });

  splitTextIntoSpans('.slider-content-next h1');
  gsap.set('.slider-content-next h1 span', {
    top: '200px',
  });

  gsap.to('.slider-content-next', {
    top: '0',
    duration: 1.125,
    ease: 'power3.out',
    onComplete: () => {
      document.querySelector('.slider-content-active').remove();
      gsap.to('.slider-content-next h1 span', {
        top: 0,
        stagger: 0.05,
        ease: 'power3.out',
        duration: 0.5,
      });

      const nextContent = document.querySelector('.slider-content-next');
      nextContent.classList.remove('slider-content-next');
      nextContent.classList.add('slider-content-active');
      nextContent.style.top = '0';

      currentContentIndex = (currentContentIndex + 1) % totalImages;
      const nextContentText = sliderContent[currentContentIndex];
      const newContentHTML = `<div class="slider-content-next" style="top:200px;"><h1>${nextContentText}</h1></div>`;

      document
        .querySelector('.slider-content')
        .insertAdjacentHTML('beforeend', newContentHTML);
    },
  });

  currentImageIndex = (currentImageIndex % totalImages) + 1;
  const newSlideHTML = `<div class="slide-next">
        <div class="slide-next-img">
          <img
            src="${imageContent[currentImageIndex]}"
            alt=""
          />
        </div>
      </div>`;

  document
    .querySelector('.slider')
    .insertAdjacentHTML('beforeend', newSlideHTML);

  gsap.to('.slider .slide-next:last-child .slide-next-img', {
    clipPath: 'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
    duration: 1.5,
    ease: 'power3.out',
    delay: 0.5,
  });

  const slideNextImg = document.querySelector('.slide-next-img');
  gsap.to(slideNextImg, {
    width: '100vw',
    height: '100vh',
    duration: 2,
    ease: 'power3.out',
    onComplete: () => {
      const currentActiveSlide = document.querySelector('.slide-active');
      if (currentActiveSlide) {
        currentActiveSlide.parentNode.removeChild(currentActiveSlide);
      }

      const nextSlide = document.querySelector('.slide-next');
      if (nextSlide) {
        nextSlide.classList.remove('slide-next');
        nextSlide.classList.add('slide-active');

        const nextSlideImg = nextSlide.querySelector('.slide-next-img');
        if (nextSlideImg) {
          nextSlideImg.classList.remove('slide-next-img');
          nextSlideImg.classList.add('slide-active-img');
        }
      }

      setTimeout(() => {
        isAnimating = false;
      }, 500);
    },
  });
}, 2000);
