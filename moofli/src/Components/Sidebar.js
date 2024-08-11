import React from 'react';
import { Link } from 'react-router-dom';
import skillop from '../images/skillop.png';
import home from '../images/octicon_home-16.png';
import setting from '../images/tabler_settings.png';
import profile from '../images/gg_profile.png';
import log_out from '../images/Log-out.png';

const Sidebar = () => {
  return (
    <>
      {/* Sidebar for screens 720px and above */}
      <div className="hidden sm:flex flex-col w-[250px] bg-white h-screen z-20">
        <div className="flex items-center mb-3 text-2xl">
          <img src={skillop} alt="Skillop" className="w-[60px]" />
          <span className="ml-2">MOOFLI</span>
        </div>
        <nav className="flex-grow">
          <ul className="list-none p-0">
            <li className="my-4 flex items-center p-[3.5px]">
              <Link to="/homepage" className="flex items-center text-gray-800 no-underline">
                <img src={home} alt="Home" className="w-6 h-6" />
                <span className="ml-2">Home</span>
              </Link>
            </li>
            <li className="my-4 flex items-center p-[3.5px]">
              <Link to="/profile" className="flex items-center text-gray-800 no-underline">
                <img src={profile} alt="Profile" className="w-6 h-6" />
                <span className="ml-2">Profile</span>
              </Link>
            </li>
            <li className="my-4 flex items-center p-[3.5px]">
              <Link to="/settings" className="flex items-center text-gray-800 no-underline">
                <img src={setting} alt="Settings" className="w-6 h-6" />
                <span className="ml-2">Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
        <button className="flex items-center text-red-600 bg-transparent border-none text-lg cursor-pointer rounded-md transition-colors duration-300 fixed bottom-7 left-4 z-20">
          <img src={log_out} alt="Logout" className="w-6 h-6" />
          <span className="ml-2">Logout Account</span>
        </button>
      </div>

      {/* Sidebar for screens below 720px */}
      <div className="fixed bottom-0 left-0 w-full bg-white flex justify-between items-center h-[80px] sm:hidden border-t border-gray-200 z-20">
        <Link to="/homepage" className="flex flex-col items-center text-gray-800 w-full">
          <img src={home} alt="Home" className="w-8 h-8" />
        </Link>
        <Link to="/profile" className="flex flex-col items-center text-gray-800 w-full">
          <img src={profile} alt="Profile" className="w-8 h-8" />
        </Link>
        <Link to="/settings" className="flex flex-col items-center text-gray-800 w-full">
          <img src={setting} alt="Settings" className="w-8 h-8" />
        </Link>
        <button className="flex flex-col items-center text-red-600 w-full">
          <img src={log_out} alt="Logout" className="w-8 h-8" />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
