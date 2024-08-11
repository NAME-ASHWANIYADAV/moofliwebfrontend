import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Post from '../Components/Post';
import Calendar from '../Components/Calendar';
import Profile2 from '../Components/Profile2.js';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen mt-12 mb-16 lg:mt-0">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:flex-row p-5">
        {/* Calendar section on smaller screens */}
        <div className="block lg:hidden mb-5 flex justify-center">
          <Calendar />
        </div>
        <div className="flex-1 lg:mr-5">
          {/* Posts section */}
          <Post
            date="16"
            day="MON"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
          />
          <Post
            date="15"
            day="SUN"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
          />
          <Post
            date="14"
            day="SAT"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
          />
        </div>
        {/* Calendar section on larger screens */}
        <div className="hidden lg:block lg:w-[300px]">
          <Calendar />
        </div>
      </div>
      <button
        className="fixed bottom-5 right-5 w-12 h-12 bg-[#0037ff92] text-white border-none rounded-full text-2xl cursor-pointer flex justify-center items-center shadow-lg hover:bg-[#0037ff92]"
        onClick={() => navigate('/new-diary')}
      >
        +
      </button>
    </div>
  );
};

export default Dashboard;
