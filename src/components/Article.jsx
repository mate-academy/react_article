import React from 'react';

export function Article({ title, text, date }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
    </div>
  );
}
