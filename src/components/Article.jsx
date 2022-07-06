import React from 'react';

export const Article = ({ title, text, date }) => (
  <>
    <h1>{title}</h1>
    <span>{text}</span>
    <p>{date}</p>
  </>
);

export default Article;
