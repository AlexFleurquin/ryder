import React, { useEffect } from 'react';

import Illustration from '../images/features-illustration.svg';
import Original from '../images/original_minimal.png';
import Confort from '../images/confort_minimal.png';


// Import Swiper
import Swiper, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
Swiper.use([Autoplay, Navigation]);

function Features() {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const carousel = new Swiper('.carousel', {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    });
  }, []);

  return (
    <section className="relative">
      {/* Bg illustration */}
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none -mt-20 -z-10" aria-hidden="true">
        <img src={Illustration} className="max-w-none" width="1440" height="440" alt="Illustration" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h3 className="h3 font-hkgrotesk mb-4 text-slate-900 dark:text-slate-100">Découvrez le vélo électrique <span class="bg-gradient-to-r text-transparent bg-clip-text from-pink-400 to-orange-200">connecté</span></h3>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-slate-500">
              Le vélo Ryder est votre compagnon de route le plus fidèle.
              <br />Connecté à vous et à chaque itinéraire que vous empruntez.
              </p>
            </div>
          </div>
          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="carousel swiper-container">
            <div className="swiper-wrapper">
              {/* Carousel items */}
              <div className="swiper-slide h-auto flex flex-col bg-gradient-to-r from-orange-200 to-orange-100 p-6 rounded hover:shadow-lg">
                <img className="mb-3 px-12" src={Original} alt="Original" />
                <div className="grow">
                  <div className="font-hkgrotesk font-bold text-xl text-slate-900">L'Original</div>
                  <div className="text-slate-500 mb-3">
                    Un cadre et un esprit ouverts pour un vélo sain.
                  </div>
                </div>
                <div className="text-right">
                  <a className="font-medium text-slate-700 hover:text-slate-900 inline-flex items-center transition duration-150 ease-in-out group" href="#0">
                    Découvrir
                  </a>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col bg-orange-100 p-6 rounded hover:shadow-lg">
                <img className="mb-3 px-12" src={Confort} alt="Confort" />
                <div className="grow">
                  <div className="font-hkgrotesk font-bold text-xl text-slate-900">Le Confort</div>
                  <div className="text-slate-500 mb-3">
                    Le vélo connecté original, transformé et confortable.
                  </div>
                </div>
                <div className="text-right">
                  <a className="font-medium text-slate-700 hover:text-slate-900 inline-flex items-center transition duration-150 ease-in-out group" href="#0">
                    Découvrir
                  </a>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col bg-gradient-to-r from-orange-100 to-orange-200 p-6 rounded hover:shadow-lg">
                <img className="mb-3 px-12" src={Original} alt="Turbo" />
                <div className="grow">
                  <div className="font-hkgrotesk font-bold text-xl text-slate-900">Le Turbo</div>
                  <div className="text-slate-500 mb-3">
                    Avec son cadre sportif et agile, la monture la plus rapide fait l'unanimité.
                  </div>
                </div>
                <div className="text-right">
                  <a className="font-medium text-slate-700 hover:text-slate-900 inline-flex items-center transition duration-150 ease-in-out group" href="#0">
                    Découvrir
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Arrows */}
          <div className="flex mt-12 space-x-4 justify-end">
            <button className="carousel-prev relative z-20 w-14 h-14 rounded-full flex items-center justify-center group border border-slate-700 bg-slate-800 hover:bg-slate-700 transition duration-150 ease-in-out">
              <span className="sr-only">Précédent</span>
              <svg className="w-4 h-4 fill-slate-400 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-14 h-14 rounded-full flex items-center justify-center group border border-slate-700 bg-slate-800 hover:bg-slate-700 transition duration-150 ease-in-out">
              <span className="sr-only">Suivant</span>
              <svg className="w-4 h-4 fill-slate-400 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
