import React from 'react';

function Article({ title, text, data }) {
  return (
    <>
      <h1>{title}</h1>
      <span>{data}</span>
      <p>{text}</p>
    </>
  );
}

export default Article;
