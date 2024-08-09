import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/"><img src="/images/home.png" alt="Home" />Home</Link>
          </li>
          <li>
            <Link to="/profile"><img src="/images/profile.png" alt="Profile" />Profile</Link>
          </li>
          <li>
            <Link to="/settings"><img src="/images/settings.png" alt="Settings" />Settings</Link>
          </li>
        </ul>
      </nav>
      <button className="logout"><img src="/images/Log-out.png" alt="Logout" />Logout Account</button>
    </div>
  );
};

export default Sidebar;
