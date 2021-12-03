import React from 'react';

const Article = ({ title, date, text }) => (
  <>
    <h1>{title}</h1>
    <span>
      <i>{date}</i>
    </span>
    <p>{text}</p>
  </>
);

export default Article;
