import React from 'react';

export const Article = ({ title, date, text }) => (
  <article>
    <h2 className="title" data-cy="title">{title}</h2>
    <p className="subtitle">
      <time dateTime={getISOdate(date)} data-cy="date">
        {getLocaleStringdate(date)}
      </time>
    </p>
    <p data-cy="text">
      {text}
    </p>
  </article>
);

function getISOdate(date) {
  return date.toISOString().slice(0, 10);
}

function getLocaleStringdate(date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
