import React from 'react';
import Sidebar from '../Components/Sidebar';
import log_out from '../images/Log-out.png'
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-page">
      <Sidebar />
      <div className="settings-content">
        <div className="settings-header">
          <p>Edit Account Information</p>
        </div>
        <div className="line"></div>
        <div className="settings-options">
          <button className="logout-button">
            <img src={log_out} className="LogOut" />
            Log Out
          </button>
        </div>
        <div className="line"></div>
      </div>
      <button className="add-button" onClick={() => window.location.href = '/new-diary'}>
        +
      </button>
    </div>
  );
};

export default Settings;
