import React from 'react';

const Article = props => (
  <div>
    <h1>{props.article.title}</h1>
    <p>{props.article.text}</p>
    <span>{props.article.date}</span>
  </div>
);

export default Article;
