import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Demo from './pages/Demo';
import ResetPassword from './pages/ResetPassword';
import OnBoarding01 from './pages/onboarding/OnBoarding01';
import OnBoarding02 from './pages/onboarding/OnBoarding02';
import OnBoarding04 from './pages/onboarding/OnBoarding04';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 500,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/onboarding" element={<OnBoarding01 />} />
        <Route path="/onboarding/accessory" element={<OnBoarding02 />} />
        <Route path="/onboarding/confirmation" element={<OnBoarding04 />} />
      </Routes>
    </>
  );
}

export default App;
