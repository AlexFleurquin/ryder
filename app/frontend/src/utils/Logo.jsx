import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link className="block flex flex-row" to="/" aria-label="Ryder">
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <defs>
              <linearGradient x1="0%" y1="100%" x2="50%" y2="0%" id="logo-a">
                  <stop stopColor="#F9425F" stopOpacity=".8" offset="0%"/>
                  <stop stopColor="#47A1F9" stopOpacity=".16" offset="100%"/>
              </linearGradient>
              <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="logo-b">
                  <stop stopColor="#FDFFDA" offset="0%"/>
                  <stop stopColor="#F97059" stopOpacity=".798" offset="49.935%"/>
                  <stop stopColor="#F9425F" stopOpacity="0" offset="100%"/>
              </linearGradient>
          </defs>
          <g fill="none" fill-rule="evenodd">
              <path d="M22 19.22c6.627 0 9.593-6.415 9.593-13.042C31.593-.45 28.627.007 22 .007S10 2.683 10 9.31c0 6.628 5.373 9.91 12 9.91z" fill="url(#logo-a)"/>
              <path d="M13.666 31.889c7.547 0 10.924-7.307 10.924-14.854 0-7.547-3.377-7.027-10.924-7.027C6.118 10.008 0 13.055 0 20.603c0 7.547 6.118 11.286 13.666 11.286z" fill="url(#logo-b)" transform="matrix(-1 0 0 1 24.59 0)"/>
          </g>
      </svg>
      <div className="text-center text-xl text-slate-900 dark:text-slate-100 font-semibold mb-0 ml-2">
        Ryder
      </div>
    </Link>
  );
}
export default Logo;
