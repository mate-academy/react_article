import React from 'react';

function Article({
  title,
  date,
  text,
}) {
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>;
}

export default Article;
