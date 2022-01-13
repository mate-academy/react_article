import React from 'react';

const Article = ({ article }) => (
  <div>
    <h1>{article.title}</h1>
    <p>{article.text}</p>
    <span>{article.date}</span>
  </div>
);

export default Article;
