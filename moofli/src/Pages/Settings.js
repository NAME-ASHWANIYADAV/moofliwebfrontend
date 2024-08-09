import React from 'react';
import Sidebar from './Sidebar';
import Profile from './Profile';
import '../styles/Settings.css';

const Settings = () => {
  return (
    <div className="settings-page">
      <Sidebar />
      <div className="settings-content">
        <div className="settings-header">
          <p>Edit Account Information</p>
        </div>
        <div className="settings-options">
          <button className="logout-button">
            <img src="/images/Log-out.png" alt="Log Out" />
            Log Out
          </button>
        </div>
        <div className="profile-wrapper">
          <Profile />
        </div>
      </div>
      <button className="add-button" onClick={() => window.location.href = '/new-diary'}>
        +
      </button>
    </div>
  );
};

export default Settings;
