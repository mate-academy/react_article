import React from 'react';

const Article = ({
  title,
  text,
  date,
}) => (
  <div className="container">
    <h1>{title}</h1>
    <p>{text}</p>
    <span>{date}</span>
  </div>
);

export default Article;
