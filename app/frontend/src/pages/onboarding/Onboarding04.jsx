import React from 'react';
import { Link } from 'react-router-dom';

import OnboardingImage from '../../images/motto-velo-electrique-4.png';

function Onboarding04() {
  return (
    <main className="bg-white">

      <div className="relative flex">

        {/* Content */}
        <div className="w-full md:w-1/2">

          <div className="min-h-screen h-full flex flex-col after:flex-1">

            <div className="flex-1">

              {/* Header */}
              <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link className="block flex flex-row" to="/" aria-label="Ryder">
                  <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <title>Laurel</title>
                          <defs>
                              <linearGradient x1="0%" y1="100%" x2="50%" y2="0%" id="logo-a">
                                  <stop stop-color="#F9425F" stop-opacity=".8" offset="0%"/>
                                  <stop stop-color="#47A1F9" stop-opacity=".16" offset="100%"/>
                              </linearGradient>
                              <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="logo-b">
                                  <stop stop-color="#FDFFDA" offset="0%"/>
                                  <stop stop-color="#F97059" stop-opacity=".798" offset="49.935%"/>
                                  <stop stop-color="#F9425F" stop-opacity="0" offset="100%"/>
                              </linearGradient>
                          </defs>
                          <g fill="none" fill-rule="evenodd">
                              <path d="M22 19.22c6.627 0 9.593-6.415 9.593-13.042C31.593-.45 28.627.007 22 .007S10 2.683 10 9.31c0 6.628 5.373 9.91 12 9.91z" fill="url(#logo-a)"/>
                              <path d="M13.666 31.889c7.547 0 10.924-7.307 10.924-14.854 0-7.547-3.377-7.027-10.924-7.027C6.118 10.008 0 13.055 0 20.603c0 7.547 6.118 11.286 13.666 11.286z" fill="url(#logo-b)" transform="matrix(-1 0 0 1 24.59 0)"/>
                          </g>
                      </svg>
                    <div className="text-center text-xl font-semibold mb-0 ml-2">
                      Ryder
                    </div>
                  </Link>
                <div className="text-sm">
                  Déjà un compte ? <Link className="font-medium text-indigo-500 hover:text-indigo-600" to="/signin">Se connecter</Link>
                </div>
              </div>

              {/* Progress bar */}
              <div className="px-4 pt-12 pb-8">
                <div className="max-w-md mx-auto w-full">
                  <div className="relative">
                    <div className="absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200" aria-hidden="true"></div>
                    <ul className="relative flex justify-between w-full">
                      <li>
                        <Link className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white" to="/onboarding-01">1</Link>
                      </li>
                      <li>
                        <Link className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white" to="/onboarding-02">2</Link>
                      </li>
                      <li>
                        <Link className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white" to="/onboarding-03">3</Link>
                      </li>
                      <li>
                        <Link className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white" to="/onboarding-04">4</Link>
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
