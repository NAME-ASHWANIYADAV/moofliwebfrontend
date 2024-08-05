import React from 'react';
import Sidebar from './Sidebar';
import Post from './Post';
import Calendar from './Calendar';
import Profile from './Profile';
import './Home.css';

const Dashboard = () => {
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
          <Profile />
        </div>
      </div>
      <button className="add-button" onClick={() => window.location.href = '/new-diary'}>
        +
      </button>
    </div>
  );
};

export default Dashboard;
