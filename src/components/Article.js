import React from 'react';

function Article({ title, text, date }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
    </>
  );
}

export default Article;
