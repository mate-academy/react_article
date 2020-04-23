import React from 'react';

// eslint-disable-next-line react/prop-types
function Article({ title, date, text }) {
  return (
    <div>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </div>
  );
}

export default Article;
