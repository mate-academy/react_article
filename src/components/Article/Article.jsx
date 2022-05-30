import React from 'react';

const Article = ({ title, text, date }) => (
  <article>
    <h1>{title}</h1>
    <p>{text}</p>
    <span>{date}</span>
  </article>
);

export default Article;
