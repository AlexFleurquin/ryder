import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [dark, setDark] = useState(false);

  useEffect(() => {
      const root = window.document.documentElement;
      if (dark) {
        return root.classList.add("dark");
      }
      root.classList.remove("dark");
  }, [dark]);

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="block" to="/" aria-label="Ryder">
              <div class="text-center text-xl font-semibold mb-0">
                Ryder
              </div>
            </Link>
          </div>
          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link className="font-medium text-slate-500 hover:text-slate-300 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" to="/signin">Se connecter</Link>
              </li>
              <li className="ml-3">
                <Link className="btn-sm text-white bg-gray-900 hover:bg-gray-700 w-full shadow-sm group" to="/signup">
                  S'abonner
                </Link>
              </li>
              <li className="text-gray-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
                <button onClick={() => setDark(!dark)} >
                  {dark ? (
                    <svg
                      className="w-6 h-6 hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 hover:text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      ></path>
                    </svg>
                  )}
                </button>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </header>
  );
}

export default Header;
