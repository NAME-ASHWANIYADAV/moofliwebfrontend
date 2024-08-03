import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NewDiary from './components/NewDiary';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/new-diary" element={<NewDiary />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
