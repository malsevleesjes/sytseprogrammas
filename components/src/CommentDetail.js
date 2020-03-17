import React from 'react';
import faker from 'faker';

const CommentDetail = () =>{
  return (
    <div className="comment">
    <a href="/" className="avatar">
    <img alt="avatar" src= {faker.image.avatar()} />
    </a>
    <div className="content">
    <a href="/" className="author>">
    sam
    </a>
    <div className="metadata">
    <span className="data">Today at 00:00AM</span>
    </div>
    <div className="text">nice body!</div>
    </div>
    </div>
  )
}

export default CommentDetail;
