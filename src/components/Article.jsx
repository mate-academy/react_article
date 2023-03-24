import React from 'react';

export const Article = ({ title, date, text }) => (
  <>
    <h2>{title}</h2>
    <p>{date}</p>
    <p>{text}</p>
  </>
);

export default Article;
