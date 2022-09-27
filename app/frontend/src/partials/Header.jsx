import React from 'react';
import { Link } from 'react-router-dom';

function Header() {


  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="block" to="/" aria-label="Cruip">
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
                <Link className="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group" to="/signup">
                  S'abonner
                </Link>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </header>
  );
}

export default Header;
