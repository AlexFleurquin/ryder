import React from 'react';
import { Link } from 'react-router-dom';

import Illustration from '../images/auth-illustration.svg';

function SignIn() {
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
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12">
                <h1 className="h2 font-hkgrotesk">C'est bon de vous revoir 👋🏼</h1>
              </div>
              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-slate-400 font-medium mb-1" htmlFor="email">
                        Email
                      </label>
                      <input id="email" className="form-input text-sm py-2 w-full" type="email" required />
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <label className="block text-sm text-slate-400 font-medium mb-1" htmlFor="password">
                          Mot de passe
                        </label>
                        <Link className="text-sm font-medium text-indigo-500 ml-2" to="/reset-password">
                          Oublié ?
                        </Link>
                      </div>
                      <input id="password" className="form-input text-sm py-2 w-full" type="password" autoComplete="on" required />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="btn-sm text-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group">
                      Se connecter
                    </button>
                  </div>
                </form>
                {/* Divider */}
                <div className="flex items-center my-6">
                  <div className="border-t border-slate-800 grow mr-3" aria-hidden="true" />
                  <div className="text-sm text-slate-500 italic">ou</div>
                  <div className="border-t border-slate-800 grow ml-3" aria-hidden="true" />
                </div>
                {/* Social login */}
                <button className="btn-sm text-sm text-white bg-rose-500 w-full relative flex after:flex-1">
                  <div className="flex-1 flex items-center">
                    <svg className="w-4 h-4 fill-current text-rose-200 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.679 6.545H8.043v3.273h4.328c-.692 2.182-2.401 2.91-4.363 2.91a4.727 4.727 0 1 1 3.035-8.347l2.378-2.265A8 8 0 1 0 8.008 16c4.41 0 8.4-2.909 7.67-9.455Z" />
                    </svg>
                  </div>
                  <span className="flex-auto text-rose-50 pl-3">Continuer avec Google</span>
                </button>
                <div className="text-center mt-6">
                  <div className="text-sm text-slate-500">
                    Je n'ai pas de compte ?
                    <Link className="font-medium text-indigo-500" to="/signup">
                      Créer mon compte
                    </Link>
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

export default SignIn;
