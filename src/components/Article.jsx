/* eslint-disable max-len */
import React from 'react';

function Article({ title, data, text }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{data}</span>
    </>
  );
}

export default Article;
