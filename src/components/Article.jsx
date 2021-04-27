import React from 'react';

const Article = ({ date, title, text }) => (
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>
);

export default Article;
