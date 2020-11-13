import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

export default function Post({ title, body, author }) {
  return (
    <>
      <div className="post">
        <div className="post-comp">
          <p>Title: </p>
          <p>{title}</p>
        </div>
        <div>
          <p>By: </p>
          <p>{author}</p>
        </div>
        <div className="message">
          <p>{body}</p>
        </div>
      </div>
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
