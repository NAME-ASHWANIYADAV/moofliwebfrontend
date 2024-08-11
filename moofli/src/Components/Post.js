import React from 'react';

const Post = ({ date, day, content }) => {
  return (
    <div className="bg-[#0037ff92] rounded-lg p-4 my-2 min-w-[300px]">
      <div className="flex justify-between">
        <div className="font-bold">{day}</div>
        <div className="bg-white py-1 px-2 rounded-md">{date}</div>
      </div>
      <div className="mt-2">
        <h3>This is your Moofli</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Post;
