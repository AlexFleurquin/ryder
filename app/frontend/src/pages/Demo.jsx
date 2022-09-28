import React from 'react';
import { Link } from 'react-router-dom';

import Illustration from '../images/auth-illustration.svg';
import Avatar01 from '../images/avatar-01.jpg';
import Avatar02 from '../images/avatar-02.jpg';
import Avatar03 from '../images/avatar-03.jpg';
import Avatar04 from '../images/avatar-04.jpg';

function Demo() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Site header */}
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
            <div className="shrink-0 mr-4">
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
            </div>
          </div>
        </div>
      </header>
      <main className="grow">
        <section className="relative">
          {/* Illustration */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
            <img src={Illustration} className="max-w-none" width="1440" height="332" alt="Page Illustration" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="lg:flex lg:space-x-20">
                {/* Left side */}
                <div className="grow lg:mt-20 mb-12 lg:mb-0 flex flex-col items-center lg:items-start">
                  {/* Avatars */}
                  <div className="flex -space-x-3 -ml-0.5 mb-6">
                    <img
                      className="rounded-full border-2 border-slate-900 box-content"
                      src={Avatar01}
                      width="40"
                      height="40"
                      alt="Avatar 01"
                    />
                    <img
                      className="rounded-full border-2 border-slate-900 box-content"
                      src={Avatar02}
                      width="40"
                      height="40"
                      alt="Avatar 02"
                    />
                    <img
                      className="rounded-full border-2 border-slate-900 box-content"
                      src={Avatar03}
                      width="40"
                      height="40"
                      alt="Avatar 03"
                    />
                    <img
                      className="rounded-full border-2 border-slate-900 box-content"
                      src={Avatar04}
                      width="40"
                      height="40"
                      alt="Avatar 04"
                    />
                  </div>
                  {/* Headline */}
                  <h3 className="h3 font-hkgrotesk mb-8 text-center lg:text-left">Venez tester Ryder</h3>
                  {/* List */}
                  <ul className="inline-flex flex-col text-lg text-slate-500 space-y-3">
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Vous souhaitez essayer nos vélos avant de vous lancer ? Réservez gratuitement une session de test au lieu de votre choix.</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit in voluptate.</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    </li>
                  </ul>
                </div>
                {/* Right side */}
                <div className="relative w-full max-w-md mx-auto">
                  {/* Bg gradient */}
                  <div className="absolute -z-10" aria-hidden="true" />
                  <div className="p-6 md:p-8">
                    <div className="font-hkgrotesk text-xl font-bold mb-6">On se rencontre ?</div>
                    {/* Form */}
                    <form>
                      <div className="space-y-4">
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                          <div className="sm:w-1/2">
                            <label className="block text-sm text-slate-400 font-medium mb-1" htmlFor="name">
                              Prénom
                            </label>
                            <input id="name" className="form-input text-sm py-2 w-full" type="text" required />
                          </div>
                          <div className="sm:w-1/2">
                            <label className="block text-sm text-slate-400 font-medium mb-1" htmlFor="surname">
                              Nom
                            </label>
                            <input id="surname" className="form-input text-sm py-2 w-full" type="text" required />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm text-slate-400 font-medium mb-1" htmlFor="email">
                            Email
                          </label>
                          <input id="email" className="form-input text-sm py-2 w-full" type="email" required />
                        </div>
                        <div>
                          <label className="block text-sm text-slate-400 font-medium mb-1" htmlFor="phone">
                            Téléphone
                          </label>
                          <input id="phone" className="form-input text-sm py-2 w-full" type="text" required />
                        </div>
                        <div>
                          <label className="block text-sm text-slate-400 font-medium mb-1" htmlFor="referrer">
                            Comment avez-vous connu Ryder ?
                          </label>
                          <select id="referrer" className="form-select py-2 w-full" required>
                            <option>Twitter</option>
                            <option>Medium</option>
                            <option>GitHub</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm text-slate-400 font-medium mb-1" htmlFor="message">
                            Décrivez nous ce que vous recherchez
                          </label>
                          <textarea id="message" className="form-textarea text-sm py-2 w-full" rows="4" required />
                        </div>
                      </div>
                      <div className="mt-6">
                        <button className="btn-sm text-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group">
                          Demander une démo
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Demo;
