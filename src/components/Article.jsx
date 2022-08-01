import React from 'react';

export function Article({
  title,
  date,
  text,
}) {
  return (
    <article>
      <h1>
        {title}
      </h1>
      <span>
        {date}
      </span>
      <p>
        {text}
      </p>
    </article>
  );
}
