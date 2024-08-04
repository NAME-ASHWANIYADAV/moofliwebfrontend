import React from 'react';
import './Calendar.css';

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="calendar-header">
        <h3>July 2024</h3>
      </div>
      <div className="calendar-grid">
        {[...Array(31)].map((_, i) => (
          <div key={i} className={`calendar-day ${i < 16 ? 'active' : ''}`}>
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
