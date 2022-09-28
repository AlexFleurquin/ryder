import React from 'react';
import { Link } from 'react-router-dom';
import NavBarSmall from './NavBarSmall';

import OnboardingImage from '../../images/motto-velo-electrique-4.png';

function Onboarding04() {
  return (
    <main className="bg-white">

      <div className="relative flex">

        {/* Content */}
        <div className="w-full md:w-1/2">

          <div className="min-h-screen h-full flex flex-col after:flex-1">

            <div className="flex-1">
              <NavBarSmall />

              {/* Progress bar */}
              <div className="px-4 pt-12 pb-8">
                <div className="max-w-md mx-auto w-full">
                  <div className="relative">
                    <div className="absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200" aria-hidden="true"></div>
                    <ul className="relative flex justify-between w-full">
                      <li>
                        <Link className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white" to="/onboarding">1</Link>
                      </li>
                      <li>
                        <Link className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white" to="/onboarding/accessory">2</Link>
                      </li>
                      <li>
                        <Link className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white" to="/onboarding/informations">3</Link>
                      </li>
                      <li>
                        <Link className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white" to="/onboarding/confirmation">4</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-8">
              <div className="max-w-md mx-auto">

                <div className="text-center">
                  <svg className="inline-flex w-16 h-16 fill-current mb-6" viewBox="0 0 64 64">
                    <circle className="text-emerald-100" cx="32" cy="32" r="32" />
                    <path className="text-emerald-500" d="m28.5 41-8-8 3-3 5 5 12-12 3 3z" />
                  </svg>
                  <h1 className="text-3xl text-slate-800 font-bold mb-8">Merci Alex 🙌</h1>
                  <Link className="btn bg-indigo-500 hover:bg-indigo-600 text-white" to="/">Aller au dashboard</Link>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Image */}
        <div className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
          <img className="object-cover object-center w-full h-full" src={OnboardingImage} width="760" height="1024" alt="Onboarding" />
        </div>

      </div>

    </main>
  );
}

export default Onboarding04;
