import React from 'react';

const Article = ({ title = 'title', date = 'date', text = 'text' }) => (
  <div>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </div>
);

export default Article;
