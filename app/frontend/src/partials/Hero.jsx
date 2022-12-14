import React from 'react';
import { Link } from 'react-router-dom';

import Illustration from '../images/hero-illustration.svg';
import HeroImage from '../images/original.png';

function Hero() {
  return (
    <section className="relative">
      {/* Illustration */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none z-30" aria-hidden="true">
        <img src={Illustration} className="max-w-none" width="1440" height="1265" alt="Hero Illustration" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 mb-6 font-extrabold text-gray-800 dark:text-white" data-aos="fade-up">
              Pédalez,
              <br />
              <span class="bg-gradient-to-r text-transparent bg-clip-text from-pink-400 to-orange-200">On s'occupe du reste</span>
            </h1>
            <p className="text-xl font-body text-slate-500 mb-10" data-aos="fade-up" data-aos-delay="100">
              Votre vélo électrique en abonnement avec conciergerie.
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <Link className="btn text-white bg-gradient-to-r from-red-300 to-orange-200 border-none hover:from-red-200 hover:to-orange-200 w-full shadow-sm group" to="/onboarding">
                  S'abonner
                </Link>
              </div>
              <div>
                <Link className="btn text-slate-300 hover:text-slate-600 border-none w-full" to="/demo">
                  Réserver un test
                </Link>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div className="pt-16 md:pt-20" data-aos="fade-up" data-aos-delay="300">
            <img className="mx-auto" src={HeroImage} width="920" height="518" alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
