import React from 'react';
import Sidebar from '../Components/Sidebar';
import log_out from '../images/Log-out.png';

const Settings = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-5 relative mt-14 sm:mt-0">
        <div className="mb-5 text-lg font-medium">Edit Account Information</div>
        <div className="border-b border-gray-300 mb-5"></div>
        <div className="mb-5">
          <button className="flex items-center text-red-600 text-base cursor-pointer bg-transparent border-none">
            <img src={log_out} className="w-8 h-8 mr-2" alt="Log Out" />
            Log Out
          </button>
        </div>
        <div className="border-b border-gray-300 mb-5"></div>
        <button
          className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full w-12 h-12 text-2xl flex items-center justify-center cursor-pointer hover:bg-blue-700"
          onClick={() => window.location.href = '/new-diary'}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Settings;
