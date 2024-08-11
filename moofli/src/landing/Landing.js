import React from 'react';
import moofliLanding from '../images/moofli-landing.png';
import skillop from '../images/skillop.png';
import moofliLogin from '../images/moofli-login.png';
import { Link } from 'react-router-dom';
import './landing.css';

const Landing = () => {
  return (
    <div className="font-poppins relative min-h-screen bg-white">
      <div className="flex justify-between items-center h-20 border-b border-gray-300 px-5 sm:px-10 lg:px-20">
        <div className="flex items-center">
          <img src={skillop} className="w-[60px] h-[60px] img-small" alt="Skillop" />
          <span className="ml-4 text-xl sm:text-2xl font-medium text-black">MOOFLI</span>
        </div>
        <Link to="/login">
          <div className="flex items-center">
            <span className="text-base sm:text-lg font-normal text-black mr-2">Log in</span>
            <img src={moofliLogin} className="w-[60px] h-[60px] img-small" alt="Moofli Login" />
          </div>
        </Link>
      </div>

      <div className="bg-[#D9D9D98F] h-10 flex items-center justify-center free-version-message">
        <p className="text-xs sm:text-sm font-normal text-black">
          you are using the free version of the app. Tap to learn more.
        </p>
      </div>

      <div className="text-center mt-10 sm:mt-20">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-black mx-5">
          where minds crunch together just like peanuts
        </h1>
        <p className="mt-5 text-sm sm:text-base lg:text-lg font-normal text-black">
          Sign in to write your first diary
        </p>

        <Link to="/">
          <button className="mt-5 px-6 py-2 bg-white text-[#108CFF] font-semibold text-sm sm:text-base border rounded-lg">
            Sign in
          </button>
        </Link>
      </div>

      <div className="absolute inset-x-0 top-44 mt-[130px] sm:mt-5 lg:top-40 moofli-landing-margin flex justify-center">
        <img src={moofliLanding} className="w-full max-w-6xl h-auto" alt="Moofli Landing" />
      </div>
    </div>
  );
};

export default Landing;
