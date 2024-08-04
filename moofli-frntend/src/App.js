import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NewDiary from './components/NewDiary';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-diary" element={<NewDiary />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
