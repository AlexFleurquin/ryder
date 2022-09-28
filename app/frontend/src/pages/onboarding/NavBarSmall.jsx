import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../utils/Logo';

function NavBarSmall() {
  return (
    <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
      <Logo />
      <div className="text-sm">
        Déjà un compte ? <Link className="font-medium text-indigo-500 hover:text-indigo-600" to="/signin">Se connecter</Link>
      </div>
    </div>
  );
}
export default NavBarSmall;
