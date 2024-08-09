import React from 'react';
import './Post.css';

const Post = ({ date, day, content }) => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-day">{day}</div>
        <div className="post-date">{date}</div>
      </div>
      <div className="post-content">
        <h3>This is your Moofli</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Post;
