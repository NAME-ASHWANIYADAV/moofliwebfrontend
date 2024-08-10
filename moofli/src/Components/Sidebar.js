import React from 'react';
import { Link } from 'react-router-dom';
import skillop from '../images/skillop.png'
import home from '../images/octicon_home-16.png'
import setting from '../images/tabler_settings.png'
import profile from '../images/gg_profile.png'
import log_out from '../images/Log-out.png'
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={skillop}/>
        <span>MOOFLI</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/homepage"><img src={home} alt="Home" />Home</Link>
          </li>
          <li>
            <Link to="/profile"><img src={profile} alt="Profile" />Profile</Link>
          </li>
          <li>
            <Link to="/settings"><img src={setting} alt="Settings" />Settings</Link>
          </li>
        </ul>
      </nav>
      <button className="logout"><img src={log_out} className="Logout" />Logout Account</button>
    </div>
  );
};

export default Sidebar;
