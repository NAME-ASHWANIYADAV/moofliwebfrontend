import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
      <img src="/images/logo.png" alt="Moofli Logo" />
       <span>MOOFLI</span>
      </div>
      <nav>
        <ul>
          <li>
            <a href="home.html"><img src="/images/home.png" alt="Home"/>Home</a>
          </li>
          <li>
          <a href="profile.html"><img src="/images/profile.png" alt="Profile"/>Profile</a>
          </li>
          <li>
          <a href="settings.html"><img src="/images/settings.png" alt="Settings"/>Settings</a>
          </li>
        </ul>
      </nav>
      <button className="logout"><img src="/images/Log-out.png" alt="logoutimg"/>Logout Account</button>
    </div>
  );
};

export default Sidebar;
