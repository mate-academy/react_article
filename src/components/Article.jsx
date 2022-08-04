import React from 'react';

export const Article = ({ title, text, date }) => (
  <div className="article">
    <h1>
      {title}
      <span className="article__span">{date}</span>
    </h1>
    <p>{text}</p>
  </div>
);
