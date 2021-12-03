import React from 'react';

const Article = ({ title, date, text }) => (
  <React.Fragment>
    <h1>{title}</h1>
    <span><i>{date}</i></span>
    <p>{text}</p>
  </React.Fragment>
);

export default Article;
