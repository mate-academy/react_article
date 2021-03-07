import React from 'react';

// eslint-disable-next-line react/prop-types
const Article = ({ title, text, date }) => (
  <>
    <h1>{title}</h1>
    <p>{text}</p>
    <span>{date}</span>
  </>
);

export default Article;
