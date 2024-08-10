import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Post from '../Components/Post';
import Calendar from '../Components/Calendar';
import Profile2 from '../Components/Profile2.js';
import '../Pages/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <div className="posts">
          <Post date="16" day="MON" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." />
          <Post date="15" day="SUN" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." />
          <Post date="14" day="SAT" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." />
          
        </div>
        <div className="sidebar-right">
          <Calendar />
          {/* <Profile2/> */}
        </div>
      </div>
      <button className="add-button" onClick={() => navigate('/new-diary')}>
        +
      </button>
    </div>
  );
};

export default Dashboard;
