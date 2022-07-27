import React from 'react';

export function Article({ title, text, date }) {
  return (
    <article>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </article>
  );
}
