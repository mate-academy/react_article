import React from 'react';

const Article = (props) => (
  <>
    <h1>{props.title}</h1>
    <span>{props.date}</span>
    <p>{props.text}</p>
  </>
);

export default Article;
