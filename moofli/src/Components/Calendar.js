import React from 'react';

const Calendar = () => {
  return (
    <div className="bg-[#92a6ef53] rounded-lg p-4 mt-5" style={{ width: '300px', height: '250px' }}>
      <div className="text-center">
        <h3>July 2024</h3>
      </div>
      <div className="flex flex-wrap">
        {[...Array(31)].map((_, i) => (
          <div
            key={i}
            className={`w-8 h-8 m-1 flex items-center justify-center rounded-full ${
              i < 16 ? 'bg-green-500 text-white' : ''
            }`}
            style={{ width: '30px', height: '30px' }}  // Ensure fixed width and height for each day
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
