import React from 'react';

export function Article({ article }) {
  return (
    <>
      <h1>{ article.title }</h1>
      <p>{ article.text }</p>
      <span>{ article.date }</span>
    </>
  );
}
