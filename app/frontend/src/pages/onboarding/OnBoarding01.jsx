import React from 'react';
import { Link } from 'react-router-dom';
import NavBarSmall from './NavBarSmall';

import OnboardingImage from '../../images/motto-velo-electrique-4.png';

function Onboarding01() {
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
                        <Link className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500" to="/onboarding/accessory">2</Link>
                      </li>
                      <li>
                        <Link className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500" to="/onboarding/informations">3</Link>
                      </li>
                      <li>
                        <Link className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500" to="/onboarding/confirmation">4</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-8">
              <div className="max-w-md mx-auto">

                <h1 className="text-3xl text-slate-800 font-bold mb-6">Sélectionnez votre modèle</h1>
                {/* Form */}
                <form>
                  <div className="space-y-3 mb-8">
                    <label className="relative block cursor-pointer">
                      <input type="radio" name="radio-buttons" className="peer sr-only" defaultChecked />
                      <div className="flex items-center bg-white text-sm font-medium text-slate-800 p-4 rounded border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out">
                        <svg className="w-6 h-6 shrink-0 fill-current mr-4" viewBox="0 0 24 24">
                          <path className="text-indigo-500" d="m12 10.856 9-5-8.514-4.73a1 1 0 0 0-.972 0L3 5.856l9 5Z" />
                          <path className="text-indigo-300" d="m11 12.588-9-5V18a1 1 0 0 0 .514.874L11 23.588v-11Z" />
                          <path className="text-indigo-200" d="M13 12.588v11l8.486-4.714A1 1 0 0 0 22 18V7.589l-9 4.999Z" />
                        </svg>
                        <span>L'original</span>
                      </div>
                      <div className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none" aria-hidden="true"></div>
                    </label>
                    <label className="relative block cursor-pointer">
                      <input type="radio" name="radio-buttons" className="peer sr-only" />
                      <div className="flex items-center bg-white text-sm font-medium text-slate-800 p-4 rounded border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out">
                        <svg className="w-6 h-6 shrink-0 fill-current mr-4" viewBox="0 0 24 24">
                          <path className="text-indigo-500" d="m12 10.856 9-5-8.514-4.73a1 1 0 0 0-.972 0L3 5.856l9 5Z" />
                          <path className="text-indigo-300" d="m11 12.588-9-5V18a1 1 0 0 0 .514.874L11 23.588v-11Z" />
                        </svg>
                        <span>Le confort</span>
                      </div>
                      <div className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none" aria-hidden="true"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-auto" to="/onboarding/accessory">Suivant</Link>
                  </div>
                </form>

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

export default Onboarding01;
